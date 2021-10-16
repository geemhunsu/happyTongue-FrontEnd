import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { history } from "../redux/ConfigureStore";
import Search from "../components/Search";
import Post from "../components/Post";
import { Grid, Text } from "../elements/index";

import { actionCreators as postActions } from "../redux/modules/post";
import Chat from "../components/Chat";

const PostList = (prowps) => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list.posts);
  React.useEffect(() => {
    dispatch(postActions.getPostMW());
  }, []);

  return (
    <React.Fragment>
      <Wrap>
        <Grid margin="0 0 0 8.5%">
          <Grid>
            <Text
              family="Wemakeprice-Bold"
              align="center"
              color="#EB5463"
              size="36px"
              margin="0px 0px 60px 0px"
            >
              "맛집추천과 맛집 찾기를 동시에! 해피텅😋"
            </Text>
          </Grid>
          <Grid max_width="1200px" margin="auto">
            <Search />
          </Grid>
          <FlexBox>
            {post_list &&
              post_list.map((p, idx) => {
                return (
                  <Grid
                    key={p._id}
                    _onClick={() => {
                      history.push(`/post/${p._id}`);
                    }}
                    width="auto"
                  >
                    <Post {...p} />
                  </Grid>
                );
              })}
          </FlexBox>
        </Grid>
        <Grid width="auto" margin="0 5% 0 0">
          <Chat id="chatDisplay" />
        </Grid>
      </Wrap>
    </React.Fragment>
  );
};

const FlexBox = styled.div`
  padding: 30px 30px;
  width: 90%;
  min-width: 340px;
  max-width: 1200px;
  margin: 100px auto;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  flex-wrap: wrap;
  box-sizing: border-box;

  &::after {
    content: "";
    width: 340px;
  }
`;

const Wrap = styled.div`
  display: flex;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export default PostList;
