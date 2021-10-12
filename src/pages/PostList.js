import React from 'react';
import Search from "../components/Search";
import Post from "../components/Post";
import {Grid} from "../elements/index";

const PostList = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Search />
            </Grid>
            <Grid width = "90%" padding="16px" margin ="auto" flex="flex-evenly" flex_wrap="wrap">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                
            </Grid>
        </React.Fragment>
    );
};

export default PostList;