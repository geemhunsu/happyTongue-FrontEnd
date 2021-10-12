import React from 'react';
import Search from "../components/Search";
import {Grid,Button} from "../elements/index";
const PostList = (props) => {
    return (
        <React.Fragment>
            <Grid>
                <Search />
            </Grid>
            <Grid>
            </Grid>
        </React.Fragment>
    );
};

export default PostList;