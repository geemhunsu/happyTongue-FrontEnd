import React from 'react';
import {Grid, Text, Button} from "../elements/index";
import Comment from "../components/Comment";
const CommentList = (props) => {
    console.log(comment_list.length);
    return (
        <Grid width = "60%" margin="auto" padding ="16px">
            {comment_list.map(c=> {
                return <Comment />
            })}
        </Grid>
    );
    
};
const comment_list =[
    1,2,3
]
export default CommentList;