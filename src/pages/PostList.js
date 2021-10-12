import React from 'react';
import Search from "../components/Search";
import Post from "../components/Post";
import {Grid,Button} from "../elements/index";

const PostList = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Search />
            </Grid>
            <Grid>
                <Post/>
            </Grid>
        </React.Fragment>
    );
};

export default PostList;