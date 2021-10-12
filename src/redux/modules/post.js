import produce from 'immer';
import React from 'react';
import {createAction, handleActions} from "redux-actions";

const GET_POST = "GET_POST";

const getPost = createAction(GET_POST, (post_list) => ({            // action 생성
    post_list
}));


const initialState = {          //  리듀서 데이터 초기값
    list:[
        {
            src : "https://mp-seoul-image-production-s3.mangoplate.com/2022803_1628401967909724.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
            title : "지아니스나폴리",
            area : "우리집",
            
        },
        {
            src : "https://mp-seoul-image-production-s3.mangoplate.com/2022803_1628401967909724.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
            title : "피자",
            area : "집",
            
        }
    ],
}

export default handleActions(       //리듀서
    {
        [GET_POST]: (state, action) =>
        produce(state, (draft)=> {
            draft.list.push(...action.payload.post_list);
        }),
    },
    initialState
)

const actionCreators = {
    getPost,
}

export {actionCreators};