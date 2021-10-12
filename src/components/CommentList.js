import React from 'react';
import {Grid, Text, Button} from "../elements/index";
import Comment from "../components/Comment";
const CommentList = (props) => {
    return (
        <Grid width = "30%" margin="auto">
            <Comment />
        </Grid>
    );
};

export default CommentList;