import React from "react";
import { Grid, Text, Image } from "../elements";
import Time from "../shared/Time";
const Comment = (props) => {
  const { user_profile, user_id, comment, insert_dt, is_even } = props;
  if (!insert_dt) {
    return;
  }

  return (
    <React.Fragment>
      {/* 댓글 구분을 위해 줄 바뀔때 색 변경*/}
      {is_even ? (
        <Grid flex="space-between" bg="#eeeeee">    {/*짝수 줄*/}
          <Grid flex width="30%">
            <Image
              src={user_profile}
              size="30"
              margin="0px 5px 0px 0px"
              shape="circle"
            />
            <Text>{user_id}</Text>
          </Grid>
          <Grid width="65%">
            <Text>{comment}</Text>
          </Grid>
          <Grid width="5%">
            <Text>{Time(insert_dt)}</Text>
          </Grid>
        </Grid>
      ) : (
        <Grid flex="space-between">     {/*홀수 줄*/}
          <Grid flex width="30%">
            <Image
              src={user_profile}
              size="30"
              margin="0px 5px 0px 0px"
              shape="circle"
            />
            <Text>{user_id}</Text>
          </Grid>
          <Grid width="65%">
            <Text>{comment}</Text>
          </Grid>
          <Grid width="5%">
            <Text>{Time(insert_dt)}</Text>
          </Grid>
        </Grid>
      )}
    </React.Fragment>
  );
};

Comment.defaultProps = {
  user_profile: "",
  user_id: "",
  comment: "",
  insert_dt: "",
  is_even: false,
};
export default Comment;
