import React from "react";
import styled from "styled-components";
import { Grid, Button, Text, Image } from "../elements";
import Post from "../components/Post";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mypageActions } from "../redux/modules/mypage";

const Mypage = (props) => {
  const dispatch = useDispatch();
  const mypost_list = useSelector((state) => state.mypage.mypost);
  const bookmark_list = useSelector((state) => state.mypage.bookmark);
  React.useEffect(() => {
    dispatch(mypageActions.getMyPostAPI());
    dispatch(mypageActions.getBookMarkAPI());
  }, []);

  console.log("내게시물: ", mypost_list);
  console.log("즐겨찾기: ", bookmark_list);
  return (
    <React.Fragment>
      <Grid
        margin="50px auto 100px"
        padding="0px 0px 30px 0px"
        width="100%"
        max_width="1200px"
      >
        <Text align="center" size="24px" family="Wemakeprice-Bold">
          {" "}
          마이페이지{" "}
        </Text>
        {/* 프로필 정보 시작*/}
        <Grid flex="flex-start" width="90%" margin="30px auto 50px">
          <Image
            border_radius="50%"
            width="100px"
            height="100px"
            shape="rectangle"
          ></Image>
          <Grid width="40%" height="60px" margin="0px 0px 0px 10px">
            <Text padding="2px" margin="0px" family="GowunDodum-Regular">
              닉네임: 쭈꾸미사랑
            </Text>
            <Text padding="2px" margin="0px" family="GowunDodum-Regular">
              아이디: lovejjukku
            </Text>
          </Grid>
        </Grid>
        {/* 프로필 정보 끝 */}
        {/* 게시물 종류 버튼 */}
        <Grid margin="0px 0px 0px 5%" flex="flex-start" width="30%">
          <Button
            width="170px"
            border="none"
            padding="5px"
            btn_color="#FDCD56"
            text="내 게시글"
            text_size="20px"
            bold
          />
          <Button
            width="170px"
            margin="0px 0px 0px 20px"
            border="none"
            padding="5px"
            btn_color="#FDCD56"
            text="즐겨찾기"
            text_size="20px"
            bold
          />
        </Grid>
        {/* 게시물 리스트 */}
        <FlexBox>
          <Post />
          <Post />
          <Post />
          <Post />
        </FlexBox>
      </Grid>
    </React.Fragment>
  );
};

const FlexBox = styled.div`
  padding: 30px 0px;
  width: 90%;
  margin: auto;
  border: 1px solid #e4e8eb;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;

  &::after {
    content: "";
    width: 340px;
  }
`;

export default Mypage;
