import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Search from "../components/Search";
import Post from "../components/Post";
import { Grid } from "../elements/index";

import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  console.log(post_list);

  React.useEffect(() => {
    dispatch(postActions.getPost);
  }, []);
  return (
    <React.Fragment>
      <Grid>
        <Search />
      </Grid>
      <Grid
        width="90%"
        padding="16px"
        margin="auto"
        flex="flex-evenly"
        flex_wrap="wrap"
      >
        {post_list.map((p, idx) => {
            console.log(idx);
          return <Post key={idx} {...p}/>;
        })}
      </Grid>
    </React.Fragment>
  );
};

export default PostList;
