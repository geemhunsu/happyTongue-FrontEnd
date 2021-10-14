import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { setCookie, getCookie, deleteCookie } from "../../shared/Cookie";
import { apis } from "../../shared/axios";

// 액션
const LOG_IN = "LOG_IN"; //로그인
const LOG_OUT = "LOG_OUT"; //로그아웃
const GET_USER = "GET_USER"; //유저정보 가져오기

// 액션 생성 함수
const logIn = createAction(LOG_IN, (user) => ({ user }));
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));

// initialState
const initialState = {
  user: {},
  is_login: false,
};

// 미들웨어 액션
const signupFB = (id, user_name, pwd, pwd_confirm) => {
  return function (dispatch, getState, { history }) {
    // 첫번째 인자
    // 두번째 인자에는 보내주는 정보를 넣는다.
    apis.creatUser({
      email: id,
      nickname: user_name,
      password: pwd,
      confirmPassword: pwd_confirm,
    });
  };
};

// 리듀서
export default handleActions(
  {
    [LOG_IN]: (state, action) =>
      produce(state, (draft) => {
        setCookie("is_login", "success");
        draft.user = action.payload.user;
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        deleteCookie("is_login");
        draft.user = null;
        draft.is_login = false;
      }),
  },
  initialState
);

const actionCreators = {
  signupFB,
};

export { actionCreators };
