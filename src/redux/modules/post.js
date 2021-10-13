import produce from 'immer';
import React from 'react';
import {createAction, handleActions} from "redux-actions";
import moment from "moment";
import {history} from "../ConfigureStore";
import {apis} from "../../shared/axios";
const GET_POST = "GET_POST";

const getPost = createAction(GET_POST, (post_list) => ({            // action 생성
    post_list
}));


const initialState = {          //  리듀서 데이터 초기값
    list :[],
}

const getPostMW =() => {
    return function (dispatch) {
        apis.getPost().then((res) => {
            const post_list = res.data;
            dispatch(getPost(post_list));
        }).catch((err) => {
            console.error(err);
        })
    }
}

const getOnePostMW = () => {
    return function (dispatch) {
        apis.getOnePost().then ((res) => {
            const post = res.data;
            dispatch(getPost(post));
        }).catch((err) => {
            console.error(err);
        });
    }
}

const getSearchPostMW= () => {
    return function (dispatch) {
        apis.getSearchPost().then((res) => {
            const post_list = res.data;
            dispatch(getPost(post_list));
        }).catch((err) => {
            console.err(err);
        })
    }
}
export default handleActions(       //리듀서
    {
        [GET_POST]: (state, action) =>
        produce(state, (draft)=> {
            draft.list = action.payload.post_list;
        }),
    },
    initialState
)

const actionCreators = {
    getPost,
    getPostMW,
    getOnePostMW,
    getSearchPostMW,
}

export {actionCreators};