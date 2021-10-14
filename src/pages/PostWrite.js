import React from 'react';
import Upload from '../components/Upload';
import { Grid, Image, Text, Button, Input, SelectBox } from '../elements';
import { useDispatch, useSelector } from 'react-redux';

import { actionCreators as postActions } from '../redux/modules/post';
import AWS from "aws-sdk";

const PostWrite = (props) => {

  const dispatch = useDispatch();
  
  const is_token = localStorage.getItem("MY_TOKEN") ? true : false;
  const is_login = useSelector((state) => state.user.is_login);
  const preview = useSelector(state => state.image.preview);
  const previewName = useSelector(state => state.image.previewName);
  const previewType = useSelector(state => state.image.previewType);  
  const previewFile = useSelector(state => state.image.previewFile);

  const [title, setTitle] = React.useState("");
  const [storeName, setStoreName] = React.useState("");
  const [storeArea, setStoreArea] = React.useState("");
  const [content, setContent] = React.useState("");

  if(!is_login && is_token)

  AWS.config.update({
    region: "ap-northeast-2",
    credentials: new AWS.CognitoIdentityCredentials({
      IdentityPoolId: 'ap-northeast-2:3be6a8f1-b813-418a-914b-0707888dcbdc',
    }),
  })

  const addPost = () => {

    const awsUpload = new AWS.S3.ManagedUpload({
      params: {
        Bucket: "hanghae-miniproject-team2-imagebucket",
        Key: `${previewName}.${previewType}`,  // 이유는 모르겠지만 저렇게 쪼개서 파일명을 줘야한다
        Body: previewFile,
        ACL: "public-read",
        ContentType: preview.type,
      },
    })
  
    const promise = awsUpload.promise();

    promise.then(date => {
      
      window.alert('업로드 성공');
    }).catch(err => {
      console.log(err, err.code, err.message);
      console.log("env", process.env.AWS_CONFIG)
      window.alert('업로드 실패');
    }).then(datat => {
      dispatch(postActions.createPostMW({
        title,
        content,
        img_url: `https://hanghae-miniproject-team2-imagebucket.s3.ap-northeast-2.amazonaws.com/${previewName}.${previewType}`,
        storeName,
        storeArea,
      }));
    })
    
  }

  return (
    <React.Fragment>      
      <Grid width="60%" padding="0 0 50px 0" margin="0 auto" flex_direction="column" flex>
        <Text family="GowunDodum-Regular" bold >미리보기</Text>
        <Image shape="rectangle" border="5px solid black" border_radius="7px" padding="7px"
          width="50%" height="500px" is_center margin="0 0 20px 0" src={preview} />
        <Upload />
        <Grid width="60%" margin="50px 0 0 0">

          <Grid flex="space-between">
            <Text family="GowunDodum-Regular" bold>제목 :</Text>
            <Input width="50%" padding="5px 1em"
              border="2px solid #F18C8E" radius="7px" _onChange={(e) => {
                setTitle(e.target.value);
              }} value={title} />
          </Grid>
          <Grid flex="space-between">
            <Text family="GowunDodum-Regular" bold>가게 이름 :</Text>
            <Input width="50%" padding="5px 1em"
              border="2px solid #F18C8E" radius="7px" _onChange={(e) => {
                setStoreName(e.target.value);
              }} value={storeName} />
          </Grid>
          <Grid flex="space-between" width="100%" margin="0 0 40px ">
            <Text family="GowunDodum-Regular" bold>지역 :</Text>
            <SelectBox padding="10px 1em" width="150px" _onChange={(e) => {
              setStoreArea(e.target.value);
            }} value={storeArea} >
              <option selected>지역 선택</option>
              <option value="서울">서울</option>
              <option value="경기">경기</option>
              <option value="강원">강원</option>
              <option value="전남">전남</option>
              <option value="전북">전북</option>
              <option value="경남">경남</option>
              <option value="경북">경북</option>
              <option value="인천">인천</option>
            </SelectBox>
          </Grid>
          <Text family="GowunDodum-Regular" bold margin="0 0 10px 0">후기 작성</Text>
          <Input multline height="200px" margin="0 0 50px 0"
            border="2px solid #F18C8E" radius="7px" _onChange={(e) => {
              setContent(e.target.value);
            }} onSubmit={addPost} value={content} />
          <Button text="작성하기" width="100%" padding="10px"
            border="none" border_radius="7px" _onClick={addPost}></Button>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};


export default PostWrite;