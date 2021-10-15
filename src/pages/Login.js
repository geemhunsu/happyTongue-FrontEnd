import React from "react";
import { Grid, Button, Input } from "../elements";
import { history } from "../redux/ConfigureStore";
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
    history.push("/");
  };

  return (
    <React.Fragment>
      <Grid
        margin="100px auto"
        flex="center"
        flex_direction="column"
        border_radius="25px"
        border="1px solid #d9d9d9"
        width="80%"
        height="48vh"
        max_width="450px"
        max_height="350px"
      >
        <Grid
          margin="0px 0px"
          flex="space-evenly"
          flex_direction="column"
          width="95%"
          height="45%"
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
            width="70%"
          ></Input>
        </Grid>
        <Grid flex="center" width="95%" height="20%" margin="0px 0px 10px 0px">
          <Button
            _onClick={login}
            padding="8px 0px"
            text_size="18px"
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
