import React from 'react';
import Upload from '../components/Upload';
import { Grid, Image, Text, Button, Input, SelectBox } from '../elements';
import { useDispatch } from 'react-redux';

import { actionCreators as postActions } from '../redux/modules/post';

const PostWrite = (props) => {    

    const dispatch = useDispatch();

    const [title, setTitle] = React.useState("");
    const [storeName, setStoreName] = React.useState("");
    const [storeArea, setStoreArea] = React.useState("");
    const [content, setContent] = React.useState("");

    const addPost = () => {        
        dispatch(postActions.createPostMW({
            src:"https://mp-seoul-image-production-s3.mangoplate.com/2022803_1628401967909724.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
            title,
            storeName,
            storeArea,
            content,                        
    }))     
    }

    return (
        <React.Fragment>
            <Grid width="60%" padding="0 0 50px 0" margin="0 auto" flex_direction="column" flex>
                <Text family="GowunDodum-Regular" bold >미리보기</Text>
                <Image shape="rectangle" border="5px solid black" border_radius="7px" padding="7px"
                width="50%" height="500px" is_center margin="0 0 20px 0" />
                <Upload/>
                <Grid width="60%" margin="50px 0 0 0">

                    <Grid flex="space-between">
                        <Text family="GowunDodum-Regular" bold>제목 :</Text>
                        <Input width="50%" padding="5px 1em" 
                        border="2px solid #F18C8E" radius="7px" _onChange={(e)=>{
                            setTitle(e.target.value);
                        }} value={title}/>
                    </Grid>
                    <Grid flex="space-between">
                        <Text family="GowunDodum-Regular" bold>가게 이름 :</Text>
                        <Input width="50%" padding="5px 1em" 
                        border="2px solid #F18C8E" radius="7px" _onChange={(e)=>{
                            setStoreName(e.target.value);
                        }} value={storeName}/>
                    </Grid>
                    <Grid flex="space-between" width="100%"  margin="0 0 40px ">
                        <Text family="GowunDodum-Regular" bold>지역 :</Text>
                        <SelectBox padding="10px 1em" width="150px" _onChange={(e)=>{
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
                    }} onSubmit={addPost} value={content}/>
                    <Button text="작성하기" width="100%" padding="10px"
                    border="none" border_radius="7px" _onClick={addPost}></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};


export default PostWrite;