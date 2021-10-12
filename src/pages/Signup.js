import React from "react";
import styled from 'styled-components';
import { Grid, Button, Input, Text } from '../elements';

const Signup = (props) => {

    return(
        <React.Fragment>
            <Grid margin="100px auto" flex="center" flex_direction="column" border_radius="4px" border="3px solid pink" width="350px" height="300px">
                <Grid margin="auto" flex="center" flex_direction="column" width="80%" height="200px">
                    <Input family="GowunDodum-Regular" outlinecolor="#EB5463" padding="0px 10px" 
                        margin="5px 0px" border="1px solid #ded9dc" placeholder="이메일"
                        radius="7px" height="30px" width="70%"></Input>
                    <Input family="GowunDodum-Regular" outlinecolor="#EB5463" padding="0px 10px"  
                        margin="5px 0px" border="1px solid #ded9dc" placeholder="닉네임"
                        radius="7px" height="30px" width="70%"></Input>
                    <Input family="GowunDodum-Regular" outlinecolor="#EB5463" padding="0px 10px" 
                        margin="5px 0px" border="1px solid #ded9dc" placeholder="비밀번호"
                        radius="7px" height="30px" width="70%"></Input>
                    <Input family="GowunDodum-Regular" outlinecolor="#EB5463" padding="0px 10px" 
                        margin="5px 0px" border="1px solid #ded9dc" placeholder="비밀번호 확인"
                        radius="7px" height="30px" width="70%"></Input>
                </Grid>
                <Grid flex="center" width="80%" height="50px" margin="0px 0px 20px 0px">
                    <Button padding="5px 0px" border="none" width="70%" btn_color="#EB5463" text="회원가입"/>
                </Grid>
            </Grid>
        </React.Fragment>
    );
}

export default Signup;
