import React from 'react';
import Upload from '../components/Upload';
import { Grid, Image, Text, Button, Input, SelectBox } from '../elements';

const PostWrite = (props) => {
    const [res_name, setResName] = React.useState("");
    const [local_name, setLocalName] = React.useState("");
    const [contents, setContents] = React.useState("");

    const add = () => {
        console.log(res_name);
        console.log(local_name);
        console.log(contents);
    }

    // const dic = {
    //     title,
    //     content,        
    //     imgUrl: "imgUrl",
    //     storeName: "storeName",
    //     storeArea: "storeArea",
    // }
    return (
        <React.Fragment>
            <Grid width="60%" padding="0 0 50px 0" margin="0 auto" flex_direction="column" flex>
                <Text family="GowunDodum-Regular" bold >미리보기</Text>
                <Image shape="rectangle" border="5px solid black" border_radius="7px" padding="7px"
                width="50%" height="500px" is_center margin="0 0 20px 0" />
                <Upload/>
                <Grid width="60%" margin="50px 0 0 0">
                    <Grid flex="space-between">
                        <Text family="GowunDodum-Regular" bold>가게 이름 :</Text>
                        <Input width="50%" padding="5px 1em" 
                        border="2px solid #F18C8E" radius="7px" _onChange={(e)=>{
                            setResName(e.target.value);
                        }}/>
                    </Grid>
                    <Grid flex="space-between" width="100%"  margin="0 0 40px ">
                        <Text family="GowunDodum-Regular" bold>지역 :</Text>
                        <SelectBox padding="10px 1em" width="150px" _onChange={(e)=>{
                            setLocalName(e.target.value);                            
                        }}>
                            <option selected>지역 선택</option>
                            <option value="서울">서울</option>
                            <option value="경기">경기</option>
                            <option value="강원">강원</option>
                            <option value="전남">전남</option>
                            <option value="전북">전북</option>
                            <option value="경남">경남</option>
                            <option value="경북">경북</option>                            
                            <option value="인천">인천</option>                            
                        </SelectBox>
                    </Grid>
                    <Text family="GowunDodum-Regular" bold margin="0 0 10px 0">후기 작성</Text>
                    <Input multline height="200px" margin="0 0 50px 0"
                    border="2px solid #F18C8E" radius="7px" _onChange={(e) => {
                        setContents(e.target.value);
                    }}/>
                    <Button text="작성하기" width="100%" padding="10px"
                    border="none" border_radius="7px" _onClick={add}></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    );
};


export default PostWrite;