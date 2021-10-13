import React from 'react';
import { Grid, Input, Button } from "../elements/index";
import { actionCreators as postActions } from "../redux/modules/post";
import { useDispatch, useSelector } from "react-redux";
const CommentWrite = (props) => {
    const dispatch = useDispatch();
    const [comment_text, setCommentText] = React.useState('');
    const onChange = (e) => {
        console.log(e.target.value);
        setCommentText(e.target.value);
    }
    const write = () => {
        dispatch(postActions.addCommentMW({comment : comment_text, asd : "asd"}));
        setCommentText("");
    }
    return (
      <React.Fragment>
          <Grid width ="60%" flex margin="auto" padding="16px">
              <Input _onChange={onChange} height="20px"></Input>
              <Button _onClick={write} text="입력" width="10%"/>
          </Grid>
      </React.Fragment>  
    );
};

export default CommentWrite;