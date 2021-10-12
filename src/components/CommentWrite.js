import React from 'react';
import { Grid, Input, Button } from "../elements/index";
const CommentWrite = (props) => {
    return (
      <React.Fragment>
          <Grid width ="60%" flex margin="auto" padding="16px">
              <Input height="20px"></Input>
              <Button text="입력" width="10%"/>
          </Grid>
      </React.Fragment>  
    );
};

export default CommentWrite;