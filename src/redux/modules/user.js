import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

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
  return function ({ history }) {
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
      })
      .catch((err) => {
        console.log("회원가입 실패");
        window.alert("회원가입 실패");
        console.log(err.code, err.message);
      });
  };
};
// 로그인 체크
const loginCheckAPI = () => {
  return function (dispatch) {
    apis
      .getUserInfo()
      .then((res) => {
        console.log("헤더에 토큰있으면 불러오는 데이터: ", res);
        localStorage.setItem("MY_NAME", res.data.user.nickname);
        dispatch(
          setUser({
            id: res.data.user.email,
            nickname: res.data.user.nickname,
          })
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 로그인
const loginAPI = (id, pwd) => {
  return function (dispatch, { history }) {
    apis
      .createLogin({
        email: id,
        password: pwd,
      })
      .then((res) => {
        const token = res.data.token;
        console.log("로그인 res ", res);
        //토큰을 로컬 스토리지에 저장
        localStorage.setItem("MY_TOKEN", token);
        localStorage.setItem("MY_ID", id);
        //로그인체크 미들웨어로 리덕스에 유저정보 저장
        apis.getUserInfo().then((res) => {
          console.log("로그인 중 ~ 헤더에 토큰있으면 불러오는 데이터: ", res);
          dispatch(
            setUser({
              id: res.data.user.email,
              nickname: res.data.user.nickname,
            })
          );
        });
      })
      .catch((err) => {
        console.log(err.code, err.message);
      });
  };
};

// 로그아웃
const logoutAPI = () => {
  return function (dispatch, getState, { history }) {
    localStorage.removeItem("MY_TOKEN");
    localStorage.removeItem("MY_ID");
    localStorage.removeItem("MY_NAME");
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
