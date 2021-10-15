import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

// 액션
const GET_BOOKMARK = "GET_BOOKMARK"; // 즐겨찾기 가져오기
const GET_MYPOST = "GET_MYPOST"; // 나의 게시글 가져오기

// 액션 생성 함수
const getBookMark = createAction(GET_BOOKMARK, (post) => ({ post }));
const getMyPost = createAction(GET_MYPOST, (post) => ({ post }));

// initialState
const initialState = {
  mypost: [],
  bookmark: [],
};

// 미들웨어 액션
// 즐겨찾기 게시글 가져오기
const getBookMarkAPI = () => {
  return function (dispatch) {
    console.log("즐겨찾기 들어오니 ");
    apis
      .getBookMark()
      .then((res) => {
        console.log("즐겨찾기 받아온 데이터: ");
        const post_list = res.data;
        dispatch(getBookMark(post_list));
      })
      .catch((err) => {
        console.log("에러도 안뜨냐");
        console.log(err);
      });
  };
};
// 내 게시글 가져오기
const getMyPostAPI = () => {
  return function (dispatch) {
    console.log("내게시글 들어오니 ");
    apis
      .getMyPost()
      .then((res) => {
        console.log("내게시글 받아온 데이터: ", res);
        const post_list = res.data;
        dispatch(getMyPost(post_list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

// 리듀서
export default handleActions(
  {
    [GET_BOOKMARK]: (state, action) =>
      produce(state, (draft) => {
        draft.bookmark = action.payload.post;
      }),
    [GET_MYPOST]: (state, action) =>
      produce(state, (draft) => {
        draft.mypost = action.payload.post;
      }),
  },
  initialState
);

const actionCreators = {
  getBookMark,
  getMyPost,
  getBookMarkAPI,
  getMyPostAPI,
};

export { actionCreators };
