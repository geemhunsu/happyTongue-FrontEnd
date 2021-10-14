import React from "react";
import styled from "styled-components";
import { Grid, Button, Input, Text } from "../elements";
import Post from "../components/Post";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Login = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [pwd, setPwd] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
    console.log(e.target.value);
  };
  const changePwd = (e) => {
    setPwd(e.target.value);
    console.log(e.target.value);
  };
  const login = () => {
    dispatch(userActions.loginAPI(id, pwd));
    // dispatch(userActions.loginCheckAPI());
  };

  return (
    <React.Fragment>
      <Grid
        margin="100px auto"
        flex="center"
        flex_direction="column"
        border_radius="4px"
        border="3px solid pink"
        width="350px"
        height="200px"
      >
        <Grid
          margin="0px 0px"
          flex="center"
          flex_direction="column"
          width="80%"
          height="120px"
        >
          <Input
            _onChange={changeId}
            family="GowunDodum-Regular"
            outlinecolor="#EB5463"
            padding="0px 10px"
            margin="5px 0px"
            border="1px solid #ded9dc"
            placeholder="이메일"
            radius="7px"
            height="30px"
            width="70%"
          ></Input>
          <Input
            _onChange={changePwd}
            family="GowunDodum-Regular"
            outlinecolor="#EB5463"
            padding="0px 10px"
            margin="5px 0px"
            border="1px solid #ded9dc"
            placeholder="비밀번호"
            type="password"
            radius="7px"
            height="30px"
            width="70%"
          ></Input>
        </Grid>
        <Grid flex="center" width="80%" height="50px" margin="0px 0px 10px 0px">
          <Button
            _onClick={login}
            padding="5px 0px"
            border="none"
            width="70%"
            btn_color="#EB5463"
            text="로그인"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Login;
