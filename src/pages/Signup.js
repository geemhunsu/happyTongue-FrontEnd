import React from "react";
import styled from "styled-components";
import { Grid, Button, Input, Text } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";

const Signup = (props) => {
  const dispatch = useDispatch();
  const [id, setId] = React.useState("");
  const [name, setName] = React.useState("");
  const [pwd, setPwd] = React.useState("");
  const [pwd_confirm, setPwdConfirm] = React.useState("");

  const changeId = (e) => {
    setId(e.target.value);
    console.log(id);
  };
  const changeName = (e) => {
    setName(e.target.value);
    console.log(name);
  };
  const changePwd = (e) => {
    setPwd(e.target.value);
    console.log(pwd);
  };
  const changePwdConfirm = (e) => {
    setPwdConfirm(e.target.value);
    console.log(pwd_confirm);
  };
  const signUp = () => {
    console.log("값넘어감.");
    dispatch(userActions.signupAPI(id, name, pwd, pwd_confirm));
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
        height="300px"
      >
        <Grid
          margin="auto"
          flex="center"
          flex_direction="column"
          width="80%"
          height="200px"
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
            _onChange={changeName}
            family="GowunDodum-Regular"
            outlinecolor="#EB5463"
            padding="0px 10px"
            margin="5px 0px"
            border="1px solid #ded9dc"
            placeholder="닉네임"
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
          <Input
            _onChange={changePwdConfirm}
            family="GowunDodum-Regular"
            outlinecolor="#EB5463"
            padding="0px 10px"
            margin="5px 0px"
            border="1px solid #ded9dc"
            placeholder="비밀번호 확인"
            type="password"
            radius="7px"
            height="30px"
            width="70%"
          ></Input>
        </Grid>
        <Grid flex="center" width="80%" height="50px" margin="0px 0px 20px 0px">
          <Button
            _onClick={signUp}
            padding="5px 0px"
            border="none"
            width="70%"
            btn_color="#EB5463"
            text="회원가입"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default Signup;
