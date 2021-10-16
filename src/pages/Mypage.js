import React from "react";
import styled from "styled-components";
import { Grid, Button, Text, Image } from "../elements";
import Post from "../components/Post";
import { history } from "../redux/ConfigureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as mypageActions } from "../redux/modules/mypage";
import { actionCreators as userActions } from "../redux/modules/user";

const Mypage = (props) => {
  const dispatch = useDispatch();
  const user_info = useSelector((state) => state.user.user);
  const mypost_list = useSelector((state) => state.mypage.mypost);
  const bookmark_list = useSelector((state) => state.mypage.bookmark);
  React.useEffect(() => {
    dispatch(mypageActions.getMyPostAPI());
    dispatch(mypageActions.getBookMarkAPI());
  }, []);
  console.log("마이페이지에서 유저인포: ", user_info);
  const [mypost_check, setCheckPost] = React.useState(true);
  const [bookmark_check, setCheckMark] = React.useState(false);
  const [title, setTitle] = React.useState("내 게시글");

  return (
    <React.Fragment>
      <Grid
        margin="0px auto 100px"
        padding="0px 0px 30px 0px"
        width="100%"
        max_width="1200px"
      >
        <Text
          margin="0px"
          align="center"
          color="#EB5463"
          size="40px"
          family="Wemakeprice-Bold"
        >
          마이페이지
        </Text>
        {/* 프로필 정보 시작*/}
        <Grid width="90%" margin="70px auto 60px" height="130px">
          <Grid
            border_radius="14px"
            flex="flex-start"
            width="45%"
            bg="#F4F6F8"
            min_width="330px"
          >
            <Grid width="30%" flex="center">
              <Image
                border_radius="50%"
                width="80px"
                height="80px"
                shape="rectangle"
                margin="0px 0px 0px 25px"
              ></Image>
            </Grid>
            <Grid width="60%" height="60px" margin="0px 0px 0px 10px">
              <Text
                width="100%"
                align="left"
                size="18px"
                padding="2px"
                margin="0px"
                family="GowunDodum-Regular"
              >
                닉네임:{user_info ? user_info.nickname : ""}
              </Text>
              <Text
                size="18px"
                padding="2px"
                margin="0px 0px 0px 0px"
                family="GowunDodum-Regular"
              >
                아이디:{user_info ? user_info.id : ""}
              </Text>
            </Grid>
          </Grid>
        </Grid>
        {/* 프로필 정보 끝 */}
        {/* 게시물 종류 버튼 */}
        <Grid
          margin="0px 0px 0px 5%"
          flex="flex-start"
          width="30%"
          min_width="220px"
        >
          <Button
            _onClick={() => {
              setCheckPost(true);
              setCheckMark(false);
              setTitle("내 게시글");
            }}
            width="170px"
            border="none"
            padding="8px 5px"
            btn_color="#5077BA"
            text="내 게시글"
            family="Wemakeprice-Bold"
            text_size="18px"
          />
          <Button
            _onClick={() => {
              setCheckPost(false);
              setCheckMark(true);
              setTitle("즐겨찾기");
            }}
            width="170px"
            margin="0px 0px 0px 10px"
            border="none"
            padding="8px 5px"
            btn_color="#5077BA"
            text="즐겨찾기"
            family="Wemakeprice-Bold"
            text_size="18px"
          />
        </Grid>
        {/* 게시물 리스트 */}
        <FlexBox>
          <TitleBox>
            <Text
              family="Wemakeprice-Bold"
              color="#5077BA"
              align="center"
              size="30px"
            >
              {title}
            </Text>
          </TitleBox>
          {mypost_list &&
            mypost_check &&
            mypost_list.map((post) => {
              return (
                <Grid
                  key={post._id}
                  _onClick={() => {
                    history.push(`/post/${post._id}`);
                  }}
                  width="auto"
                  margin="0px"
                >
                  <Post {...post} />
                </Grid>
              );
            })}
          {bookmark_list &&
            bookmark_check &&
            bookmark_list.map((post) => {
              return (
                <Grid
                  key={post._id}
                  _onClick={() => {
                    history.push(`/post/${post._id}`);
                  }}
                  width="auto"
                  margin="0px"
                >
                  <Post {...post} />
                </Grid>
              );
            })}
        </FlexBox>
      </Grid>
    </React.Fragment>
  );
};

const FlexBox = styled.div`
  padding: 30px 20px;
  width: 90%;
  min-width: 340px;
  margin: auto;
  border: 1px solid #e4e8eb;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  box-sizing: border-box;

  &::after {
    content: "";
    width: 340px;
  }
`;

const TitleBox = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: center;
  box-sizing: border-box;
`;

export default Mypage;
