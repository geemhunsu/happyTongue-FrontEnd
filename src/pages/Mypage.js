import React from "react";
import styled from"styled-components";
import { Grid, Button, Text, Image } from '../elements';
import Post from '../components/Post';

const Mypage = (props) => {

    return(
        <React.Fragment>
            <Grid  margin="50px auto" padding="0px 0px 30px 0px" width="1200px">
                <Text align="center" size="24px" family="Wemakeprice-Bold"> 마이페이지 </Text>
                <Grid flex="flex-start" width="90%" margin="30px auto 50px">
                    <Image border_radius="50%" width="100px" height="100px" shape="rectangle"></Image>
                    <Grid width="40%" height="60px" margin="0px 0px 0px 10px">
                        <Text padding="2px" margin="0px" family="GowunDodum-Regular">닉네임: 쭈꾸미사랑</Text>
                        <Text padding="2px" margin="0px" family="GowunDodum-Regular">아이디: lovejjukku</Text>
                    </Grid>
                </Grid>
                <Grid margin="0px 0px 0px 5%" flex="flex-start" width="30%">
                    <Button border="none" padding="5px" btn_color="#FDCD56" text="내가 작성한 글"/>
                    <Button margin="0px 0px 0px 10px" border="none" padding="5px" btn_color="#FDCD56" text="즐겨찾기한 글"/>
                </Grid>    
                <Grid padding="30px 0px" custom_flex width="90%" margin="auto" border="1px solid #E4E8EB">
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </Grid>

            </Grid>
        </React.Fragment>
    );
}


export default Mypage;