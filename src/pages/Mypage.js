import React from "react";
import styled from"styled-components";
import { Grid, Button, Text, Image } from '../elements';
import Post from '../components/Post';

const Mypage = (props) => {

    return(
        <React.Fragment>
            <Grid margin="50px auto" padding="0px 0px 30px 0px" width="100%">
                <Text align="center" size="24px" family="Wemakeprice-Bold"> 마이페이지 </Text>
                <Grid flex="flex-start" width="90%" margin="30px auto 50px">
                    <Image border_radius="50%" width="100px" height="100px" shape="rectangle"></Image>
                    <Grid width="40%" height="60px" margin="0px 0px 0px 10px">
                        <Text padding="2px" margin="0px" family="GowunDodum-Regular">닉네임: 쭈꾸미사랑</Text>
                        <Text padding="2px" margin="0px" family="GowunDodum-Regular">아이디: lovejjukku</Text>
                    </Grid>
                </Grid>
                <Grid margin="0px 0px 0px 5%" flex="flex-start" width="30%">
                    <Button width="170px" border="none" padding="5px" btn_color="#FDCD56" text="내가 작성한 글"/>
                    <Button width="170px" margin="0px 0px 0px 10px" border="none" padding="5px" btn_color="#FDCD56" text="즐겨찾기한 글"/>
                </Grid>    
                <FlexBox>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                    <Post/>
                </FlexBox>
            </Grid>
        </React.Fragment>
    );
}

const FlexBox = styled.div`
    padding: 30px 0px;
    width: 90%; 
    margin: auto; 
    border: 1px solid #E4E8EB;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly; 
    flex-wrap: wrap;

    &::after {
        content: '';
        width: 340px;
    }
`;


export default Mypage;