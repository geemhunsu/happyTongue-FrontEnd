import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import { apis } from "../../shared/axios";

// 액션
const GET_BOOKMARK = "GET_BOOKMARK"; // 즐겨찾기 가져오기
const GET_MYPOST = "GET_MYPOST"; // 나의 게시글 가져오기

// 액션 생성 함수
const _getBookMark = createAction(GET_BOOKMARK, (post) => ({ post }));
const _getMyPost = createAction(GET_MYPOST, (post) => ({ post }));

// initialState
const initialState = {
  mypost: [],
  bookmark: [],
};

// 미들웨어 액션
// 즐겨찾기 게시글 가져오기
const getBookMarkAPI = () => {
  return function (dispatch) {
    apis
      .getBookMark()
      .then((res) => {
        const post_list = res.data;
        dispatch(_getBookMark(post_list));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
// 내 게시글 가져오기
const getMyPostAPI = () => {
  return function (dispatch) {
    apis
      .getMyPost()
      .then((res) => {
        console.log(res);
        const post_list = res.data;
        dispatch(_getMyPost(post_list));
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
        draft.bookmark = action.payload.post.posts;
      }),
    [GET_MYPOST]: (state, action) =>
      produce(state, (draft) => {
        draft.mypost = action.payload.post.posts;
      }),
  },
  initialState
);

const actionCreators = {
  _getBookMark,
  _getMyPost,
  getBookMarkAPI,
  getMyPostAPI,
};

export { actionCreators };
