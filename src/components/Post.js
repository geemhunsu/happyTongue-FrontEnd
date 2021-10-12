import React from "react";
import styled from 'styled-components';
import { Grid, Text, Image } from '../elements';
// import { AiFillStar } from "react-icons/ai";
import StarIcon from '@mui/icons-material/Star';
import { yellow } from '@mui/material/colors';
const Post = (props) => {
    return(
        <React.Fragment>
            <Grid padding="0px" flex="center" flex_direction="column" margin="20px" width="300px" height="250px" border="1px solid #d3d9dc">
                {/* 사진 */}
                <Grid width="100%" height="180px">
                    <Image src="https://mp-seoul-image-production-s3.mangoplate.com/2022803_1628401967909724.jpg?fit=around|738:738&crop=738:738;*,*&output-format=jpg&output-quality=80" 
                    width="100%" height="100%" shape="rectangle"></Image>
                </Grid>
                {/* 제목 */}
                <Grid height="70px" width="100%" margin="0px">
                    <Grid height="36px" flex="space-between">
                        <Text family="Wemakeprice-Bold" margin="0px" padding="7px" size="18px" bold>지아니스나폴리</Text>
                        <Grid is_center width="50px" height="30px">
                            <StarIcon sx={{ color: yellow[500] }}/>
                        </Grid>
                    </Grid>
                    <Text family="GowunDodum-Regular" margin="0px" padding="3px 7px" size="13px">인천/ 해산물</Text>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Post;