import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";
import axios from "axios";

// 액션
const SET_USER = "SET_USER"; //로그인
const LOG_OUT = "LOG_OUT"; //로그아웃
const GET_USER = "GET_USER"; //유저정보 가져오기

// 액션 생성 함수
const setUser = createAction(SET_USER, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

// 미들웨어 액션
// 회원가입
const signupAPI = (id, name, pwd, pwd_confirm) => {
  return function (dispatch, getState, { history }) {
    apis
      .createUser({
        email: id,
        nickname: name,
        password: pwd,
        confirmPassword: pwd_confirm,
      })
      .then(() => {
        console.log("회원가입 성공");
        window.alert("회원가입 성공");
        //로그인 화면으로 이동
        history.push("/login");
      })
      .catch((err) => {
        console.log("회원가입 실패");
        window.alert("회원가입 실패");
        console.log(err.code, err.message);
      });
  };
};
// 로그인
const loginAPI = (id, pwd) => {
  return function (dispatch, getState, { history }) {
    apis
      .createLogin({
        email: id,
        password: pwd,
      })
      .then((res) => {
        const nickname = res.data.nickname;
        const token = res.data.token;
        //토큰을 로컬 스토리지에 저장
        localStorage.setItem("MY_TOKEN", "임시토큰!");
        localStorage.setItem("My_INFO", "임시닉네임");
        dispatch(
          setUser({
            id: id,
            nickname: "임시닉네임",
          })
        );

        //토큰을 헤더 기본값으로 설정
        // axios.defaults.headers.common[
        //   "authorization"
        // ] = `bearer ${res.data.token}`;

        //메인 화면으로 이동
        history.push("/");
        console.log("로그인 성공");
        console.log(localStorage.getItem("My_INFO"));
        window.alert("로그인 성공");
      })
      .catch((err) => {
        console.log("로그인 실패");
        window.alert("로그인 실패");
        console.log(err.code, err.message);
      });
  };
};
// 로그인 체크
const loginCheckAPI = () => {
  return function (dispatch, getState, { history }) {
    const _token = localStorage.getItem("MY_TOKEN");
    const _user_info = localStorage.getItem("My_INFO");
    // axios.defaults.headers.common["authorization"] = `bearer ${_token}`;
    //토큰이나 유저정보가 없으면 메인화면으로 이동.
    if (!_token || !_user_info) {
      history.replace("/");
      return;
    } else {
      //토큰과 유저정보가 있다면 setUser로 리덕스에 유저정보 저장.
      const userInfo = localStorage.getItem("My_INFO");
      dispatch(
        setUser({
          id: "임시아이디",
          nickname: userInfo,
        })
      );
    }
  };
};

// 로그아웃
const logoutAPI = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("MY_TOKEN");
    localStorage.removeItem("My_INFO");
    dispatch(logOut());
    history.replace("/");
  };
};

// 리듀서
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  setUser,
  logOut,
  getUser,
  signupAPI,
  loginAPI,
  logoutAPI,
  loginCheckAPI,
};

export { actionCreators };
