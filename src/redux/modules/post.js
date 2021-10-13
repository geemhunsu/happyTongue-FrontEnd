import produce from 'immer';
import React from 'react';
import {createAction, handleActions} from "redux-actions";
import moment from "moment";

const GET_POST = "GET_POST";

const getPost = createAction(GET_POST, (post_list) => ({            // action 생성
    post_list
}));


const initialState = {          //  리듀서 데이터 초기값
    list:[
        {
            src : "https://mp-seoul-image-production-s3.mangoplate.com/2022803_1628401967909724.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
            title : "지아니스나폴리",
            content : "안녕하세요",
            area : "우리집",
            insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"), 
            id:"a",
            comment : [{id:"a",user_profile : "", user_id : "한쥰", comment : "마싯겟다",  // 댓글 
                        insert_dt: moment().format("YYYY-MM-DD hh:mm:ss")},
                        {id:"b",user_profile : "", user_id : "한쥰2", comment : "굳",  // 댓글 
                        insert_dt: moment().format("YYYY-MM-DD hh:mm:ss")}]
        },
        {
            src : "https://mp-seoul-image-production-s3.mangoplate.com/2022803_1628401967909724.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80",
            title : "피자",
            content : "안녕하세요2",
            area : "집",
            insert_dt: moment().format("YYYY-MM-DD hh:mm:ss"),
            id:"b",
            comment : [{id:"a",user_profile : "", user_id : "한쥰3", comment : "맛없겠다",  // 댓글 
                        insert_dt: moment().format("YYYY-MM-DD hh:mm:ss")},
                        {id:"b",user_profile : "", user_id : "한쥰4", comment : "노굳",  // 댓글 
                        insert_dt: moment().format("YYYY-MM-DD hh:mm:ss")}]
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