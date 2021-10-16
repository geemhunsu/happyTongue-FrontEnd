import React from "react";
import styled from "styled-components";

import Logo from "../happytonguelogo.png";
import { Grid, Button, Text, Image } from "../elements";
import { history } from "../redux/ConfigureStore";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Header = (props) => {
  const dispatch = useDispatch();
  const is_login = useSelector((state) => state.user.is_login);
  const is_token = localStorage.getItem("MY_TOKEN") ? true : false;
  console.log("토큰유무: ", is_token);
  // 토큰의 유무에 따라서만 로그인 상태인지 로그아웃 상태인지 확인
  if (is_token) {
    return (
      <React.Fragment>
        <Grid
          // bg="rgba(254, 255, 189, 0.13)"
          bg="#fff"
          margin="0px 0px 80px 0px"
          height="130px"
          width="100%"
          shadow="rgb(0 0 0 / 5%) 0px 3px 10px 0px, rgb(0 0 0 / 2%) 0px 0px 1px 1px"
        >
          <Grid
            max_width="1200px"
            width="80%"
            margin="auto"
            padding="0px"
            flex="space-between"
          >
            <Grid
              hover
              width="auto"
              height="auto"
              flex="center"
              _onClick={() => {
                history.push("/");
              }}
            >
              <img
                src={Logo}
                style={{
                  width: "83px",
                }}
              />
            </Grid>
            <Grid
              width="25%"
              min_width="200px"
              height="auto"
              margin="50px 0px 0px 0px"
            >
              {/* 로그인 후 헤더 시작 */}
              <Grid flex="center">
                <Button
                  _onClick={() => {
                    history.push("/mypage");
                  }}
                  text="내 정보"
                  text_size="16px"
                  height="40px"
                  padding="0px"
                  font_color="#424852"
                  btn_color="#fff"
                  border="3px solid #FF9696"
                  margin="0 10px 0 0"
                  border_radius="20px"
                  bold="bold"
                ></Button>
                <Button
                  _onClick={() => {
                    dispatch(userActions.logoutAPI());
                    alert("로그아웃 되었습니다.");
                  }}
                  text="로그아웃"
                  text_size="16px"
                  height="40px"
                  padding="0px"
                  font_color="#424852"
                  btn_color="#fff"
                  border="3px solid #FF9696"
                  border_radius="20px"
                  bold="bold"
                ></Button>
              </Grid>
              {/* 로그인 후 헤더 끝 */}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Grid
          bg="#fff"
          margin="0px 0px 80px 0px"
          height="130px"
          width="100%"
          shadow="rgb(0 0 0 / 5%) 0px 3px 10px 0px, rgb(0 0 0 / 2%) 0px 0px 1px 1px"
        >
          <Grid
            max_width="1200px"
            width="80%"
            margin="auto"
            padding="0px"
            flex="space-between"
          >
            <Grid
              hover
              width="auto"
              flex="center"
              _onClick={() => {
                history.push("/");
              }}
            >
              <img
                src={Logo}
                style={{
                  width: "83px",
                }}
              />
            </Grid>
            <Grid
              width="25%"
              min_width="200px"
              height="auto"
              margin="50px 0px 0px 0px"
            >
              {/* 로그인 전 헤더 시작*/}
              <Grid flex>
                <Button
                  _onClick={() => {
                    history.push("/login");
                  }}
                  text="로그인"
                  text_size="16px"
                  height="40px"
                  padding="0px"
                  font_color="#424852"
                  btn_color="#fff"
                  border="3px solid #FF9696"
                  margin="0 10px 0 0"
                  border_radius="20px"
                  bold
                ></Button>
                <Button
                  _onClick={() => {
                    history.push("/signup");
                  }}
                  text="회원가입"
                  text_size="16px"
                  height="40px"
                  padding="0px"
                  font_color="#424852"
                  btn_color="#fff"
                  border="3px solid #FF9696"
                  border_radius="20px"
                  bold
                ></Button>
              </Grid>
              {/* 로그인 전 헤더 끝 */}
            </Grid>
          </Grid>
        </Grid>
      </React.Fragment>
    );
  }
};

const ElA = styled.a`
  display: inline-block;
  width: auto;
  height: auto;
  cursor: pointer;
`;

export default Header;
