import React from "react";
import styled from 'styled-components';
import { Grid, Button, Input, Text } from '../elements';

const Post = (props) => {

    return(
        <React.Fragment>
            <Grid bg="pink" width="300px" height="250px">
                {/* 사진 */}
                <Grid width="300px" height="160px" bg="lightblue"/>
                {/* 제목 */}
                <Grid>
                    <Text>쭈꾸미먹고싶어</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Post;