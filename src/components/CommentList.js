import React from 'react';
import {Grid} from "../elements/index";
import Comment from "../components/Comment";
const CommentList = (props) => {
    console.log(comment_list.length);
    // comment_list가 없으면 return
    if(!comment_list) {
        return;
    }

    // comment_list 길이만큼 반복
    return (
        <Grid width = "60%" margin="auto" padding ="16px">
            {comment_list.map(c=> {
                return <Comment key={c}/>
            })}
        </Grid>
    );
    
};
const comment_list =[
    1,2,3
]
export default CommentList;