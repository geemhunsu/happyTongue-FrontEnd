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
  if (is_login && is_token) {
    return (
      <React.Fragment>
        <Grid
          margin="0px 0px 40px 0px"
          height="130px"
          width="100%"
          border_bottom="1px solid lightgray"
        >
          <Grid width="80%" margin="auto" padding="20px" flex="space-between">
            <Grid
              width="auto"
              flex="center"
              _onClick={() => {
                history.push("/");
              }}
            >
              <img
                src={Logo}
                style={{
                  width: "60px",
                }}
              />
            </Grid>
            <Grid width="25%">
              {/* 로그인 후 헤더 시작 */}
              <Grid flex="flex">
                <Button
                  _onClick={() => {
                    history.push("/mypage");
                  }}
                  text="내 정보"
                  height="40px"
                  padding="0px"
                  font_color="#fff"
                  btn_color="#FF9696"
                  border="none"
                  margin="0 10px 0 0"
                  border_radius="4px"
                  bold="bold"
                ></Button>
                <Button
                  _onClick={() => {
                    dispatch(userActions.logoutAPI());
                  }}
                  text="로그아웃"
                  height="40px"
                  padding="0px"
                  font_color="#fff"
                  btn_color="#FF9696"
                  border="none"
                  border_radius="4px"
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
          margin="0px 0px 40px 0px"
          height="130px"
          width="100%"
          border_bottom="1px solid lightgray"
        >
          <Grid width="80%" margin="auto" padding="20px" flex="space-between">
            <Grid
              width="auto"
              flex="center"
              _onClick={() => {
                history.push("/");
              }}
            >
              <img
                src={Logo}
                style={{
                  width: "60px",
                }}
              />
            </Grid>
            <Grid width="25%">
              {/* 로그인 전 헤더 시작*/}
              <Grid flex>
                <Button
                  _onClick={() => {
                    history.push("/login");
                  }}
                  text="로그인"
                  height="40px"
                  padding="0px"
                  font_color="#fff"
                  btn_color="#FF9696"
                  border="none"
                  margin="0 10px 0 0"
                  border_radius="4px"
                  bold
                ></Button>
                <Button
                  _onClick={() => {
                    history.push("/signup");
                  }}
                  text="회원가입"
                  height="40px"
                  padding="0px"
                  font_color="#fff"
                  btn_color="#FF9696"
                  border="none"
                  border_radius="4px"
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
