import React from "react";
import { Grid, Button, Input, Text } from "../elements";
import { useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
import { useHistory } from "react-router-dom";

const Signup = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
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
    history.push("/login");
  };
  return (
    <React.Fragment>
      <Grid
        id="background"
        margin="100px auto"
        flex="center"
        flex_direction="column"
        border_radius="25px"
        border="1px solid #d9d9d9"
        width="80%"
        height="75vh"
        max_width="550px"
        max_height="650px"
      >
        <Grid
          margin="40px auto 5px"
          flex="space-evenly"
          flex_direction="column"
          width="95%"
          height="55%"
        >
          <Input
            _onChange={changeId}
            value={id}
            size="18px"
            family="GowunDodum-Regular"
            outlinecolor="#EB5463"
            padding="5px 10px"
            margin="0px"
            border="1px solid #ded9dc"
            placeholder="이메일"
            radius="7px"
            width="70%"
          ></Input>
          <Grid width="70%" margin="5px 0px 0px 0px" height="auto">
            <Text
              color="#E8553E"
              padding="0px 10px"
              size="16px"
              margin="0px 0px 8px 0px"
            >
              영어, 한글 숫자로 이뤄진 최소 4자리 이상
            </Text>
            <Input
              _onChange={changeName}
              value={name}
              size="18px"
              family="GowunDodum-Regular"
              outlinecolor="#EB5463"
              padding="5px 10px"
              margin="0px"
              border="1px solid #ded9dc"
              placeholder="닉네임"
              radius="7px"
              width="100%"
            ></Input>
          </Grid>
          <Grid width="70%" margin="5px 0px 0px 0px" height="auto">
            <Text
              color="#E8553E"
              padding="0px 10px"
              size="16px"
              margin="0px 0px 8px 0px"
            >
              영어와 숫자로 시작한 최소 5자리 이상
            </Text>
            <Input
              _onChange={changePwd}
              value={pwd}
              size="18px"
              family="GowunDodum-Regular"
              outlinecolor="#EB5463"
              padding="5px 10px"
              margin="0px"
              border="1px solid #ded9dc"
              placeholder="비밀번호"
              type="password"
              radius="7px"
              width="100%"
            ></Input>
          </Grid>
          <Input
            _onChange={changePwdConfirm}
            value={pwd_confirm}
            size="18px"
            family="GowunDodum-Regular"
            outlinecolor="#EB5463"
            padding="5px 10px"
            margin="0px"
            border="1px solid #ded9dc"
            placeholder="비밀번호 확인"
            type="password"
            radius="7px"
            width="70%"
          ></Input>
        </Grid>
        <Grid flex="center" width="95%" height="20%" margin="0px 0px 20px 0px">
          <Button
            _onClick={signUp}
            padding="8px 0px"
            text_size="18px"
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
