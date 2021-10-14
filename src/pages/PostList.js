import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/ConfigureStore";
import Search from "../components/Search";
import Post from "../components/Post";
import { Grid, Button } from "../elements/index";

import { actionCreators as postActions } from "../redux/modules/post";

const PostList = (props) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);
  React.useEffect(() => {
    dispatch(postActions.getPostMW());
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
          return (
            <Grid
              key={p.id}
              _onClick={() => {
                history.replace(`/post/${p.id}`);
              }}
              width="auto"
            >
              <Post {...p} />
            </Grid>
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default PostList;
