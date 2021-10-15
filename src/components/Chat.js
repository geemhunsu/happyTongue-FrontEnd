import React from 'react';
import { Grid, Button, Image, Text, Input } from '../elements';
import io from 'socket.io-client';
import { useSelector, useDispatch } from 'react-redux';

import { actionCreators as userActions } from "../redux/modules/user"

const Chat = (props) => {
  const dispatch = useDispatch();

  const is_login = useSelector((state) => state.user.is_login);
  const is_token = localStorage.getItem("MY_TOKEN") ? true : false;

  const _nickname = useSelector(stats => stats.user.user?.nickname)
  const [state, setState] = React.useState({
    message: "",
  });
  const [chatList, setChatList] = React.useState([]);
  const [chat, setChat] = React.useState([]);
  const [userList, setUserList] = React.useState([]);
  const socketRef = React.useRef();

  const chatBox = document.getElementById('chatBox');
  const userBox = document.getElementById('userBox');

  
  React.useEffect(() => {
    
    socketRef.current = io.connect('http://3.34.138.243', { transports: ['websocket'] });
    socketRef.current.emit("join", _nickname );

    socketRef.current.on("chatLog", (chatLog) => {
      setChatList(chatLog);
    })    
    socketRef.current.on("receiveMsg", (data) => {
      const { nickname, msg, time} = data;
      setChat([...chat, {nickname, msg, time}]);
    })

    socketRef.current.on("currentOn", (data) => {
      setUserList([...data, ]);
    })

    return () => socketRef.current.disconnect();
  }, [chat]);




  const sendMessage = () => {
    if (state.message === "") {
      window.alert("메세지를 입력해주세요")
      return
    }
    console.log(chatList.length)
    const moveScroll = () => {
      chatBox.scrollTo({ top: chatBox.scrollHeight + 460, behavior: 'smooth' });
    }
    const { message } = state;
    socketRef.current.emit("sendMsg", { nickname:_nickname, msg: message, });
    setState({ ...state, message: "" });
    setTimeout(moveScroll, 200)
  }

  const showChatting = () => {
    userBox.style.display = "none";
    chatBox.style.display = "block";
  }

  const showNowUsers = () => {
    chatBox.style.display = "none";
    userBox.style.display = "block";
  }  
  return (
    <React.Fragment>
      <Grid width="450px" height="80vh" margin="0 auto" padding="1em 2em"
        bg="#f0b7a4" flex="flex-start" flex_direction="column">
        <Grid flex="space-between" height="10%">

          <Grid flex="flex-start" >
            <Button text="채팅" width="20%" border="none" margin="0 10px 0 0 " hover="steelblue"
              padding="1em" border_radius="7px" _onClick={showChatting} ></Button>
            <Button text="접속자" width="30%" border="none" hover="steelblue"
              padding="1em" border_radius="7px" _onClick={showNowUsers} ></Button>
          </Grid>
          <Grid width="auto">
            <Text family="GowunDodum-Regular" bold>{userList.length} 명이 접속 중입니다</Text>
          </Grid>

        </Grid>
        <Grid flex="flex-start" height="60%">

          <Grid bg="#f1d1b5" height="90%" margin="0 0 30px 0" padding="1em"
            border_radius="7px" overflow="auto" id="chatBox">

            {chatList.map((chatting, index) => {
              if (chatting.nickname === _nickname) {
                return (
                  <Grid height="auto" margin="0 0 5px 0">
                    <Grid flex="flex-end" height="auto" margin="0 0 5px 0">
                      <Image shape="circle" size="30" />
                      <Text margin="5px" family="GowunDodum-Regular" bold>
                        {chatting.nickname}
                      </Text>
                    </Grid>
                    <Grid flex="space-between">
                      <Text margin="0" padding="15px 0 0 0"
                        family="GowunDodum-Regular" size=".8em">{chatting.time}</Text>
                      <Grid bg="skyblue" border_radius="20px" height="auto" width="85%" padding="0 5px">
                        <Text margin="5px" family="GowunDodum-Regular" bold
                          align="right" color="black" >{chatting.msg}</Text>
                      </Grid>
                    </Grid>
                  </Grid>
                )
              }
              return (
                <Grid height="auto" margin="0 0 5px 0" key={index}>
                  <Grid flex height="auto" margin="0 0 5px 0">
                    <Image shape="circle" size="30" />
                    <Text margin="5px" family="GowunDodum-Regular" bold>{chatting.nickname}</Text>
                  </Grid>
                  <Grid flex="space-between">
                    <Grid bg="white" border_radius="20px" height="auto" width="85%">
                      <Text margin="5px" family="GowunDodum-Regular" bold>{chatting.msg}</Text>
                    </Grid>
                    <Text margin="0" padding="15px 0 0 0"
                      family="GowunDodum-Regular" size=".8em">{chatting.time}</Text>
                  </Grid>
                </Grid>
              )
            })}

            {/* {chat.map((chatting, index) => {
              if (chatting.nickname === state.nickname) {
                return (
                  <Grid height="auto" margin="0 0 5px 0">
                    <Grid flex="flex-end" height="auto" margin="0 0 5px 0">
                      <Image shape="circle" size="30" />
                      <Text margin="5px" family="GowunDodum-Regular" bold>
                        {chatting.nickname}
                      </Text>
                    </Grid>
                    <Grid flex="space-between">
                      <Text margin="0" padding="15px 0 0 0"
                        family="GowunDodum-Regular" size=".8em">{chatting.time}</Text>
                      <Grid bg="skyblue" border_radius="20px" height="auto" width="85%" padding="0 5px">
                        <Text margin="5px" family="GowunDodum-Regular" bold
                          align="right" color="black" >{chatting.msg}</Text>
                      </Grid>
                    </Grid>
                  </Grid>
                )
              };
              return (
                <Grid height="auto" margin="0 0 5px 0" key={index}>
                  <Grid flex height="auto" margin="0 0 5px 0">
                    <Image shape="circle" size="30" />
                    <Text margin="5px" family="GowunDodum-Regular" bold>{chatting.nickname}</Text>
                  </Grid>
                  <Grid flex="space-between">
                    <Grid bg="white" border_radius="20px" height="auto" width="85%">
                      <Text margin="5px" family="GowunDodum-Regular" bold>{chatting.msg}</Text>
                    </Grid>
                    <Text margin="0" padding="15px 0 0 0"
                      family="GowunDodum-Regular" size=".8em">{chatting.time}</Text>
                  </Grid>
                </Grid>
              )
            })} */}

          </Grid>
          <Grid bg="#f1d1b5" height="90%" margin="0 0 30px 0" padding="1em"
            border_radius="7px" overflow="auto" id="userBox" display="none">

            {userList.map((user, index) => {
              return (
                <Grid flex margin="0 0 20px 0" height="auto" key={index}
                  bg="aliceblue" padding="0.5em" border_radius="10px" width="auto" >
                  <Image shape="circle" size="30" margin="0 10px 0 0" />
                  <Text margin="0" family="GowunDodum-Regular" color="#0e77d3" bold >
                    {user}
                  </Text>
                </Grid>
              )
            })}

          </Grid>
        </Grid>
        <Grid bg="#f1d1b5" height="30%" padding="1em" border_radius="7px">

          <Grid flex flex_direction="column" height="auto" >
            <Grid flex margin="0 0 20px 0">
              <Image shape="circle" size="30" margin="0 5px 0 0" />
              <Text margin="0" family="GowunDodum-Regular" bold>{_nickname}</Text>
            </Grid>
            <Grid flex="flex-start">
              <Input mulitline width="550px" height="120px" family="GowunDodum-Regular" bold
                _onChange={(e) => {
                  setState({ ...state, message: e.target.value });
                }} onSubmit={sendMessage} border="none" value={state.message} />
              <Button text="전송" padding="50px 0" border="1px solid black"
                _onClick={sendMessage}></Button>
            </Grid>
          </Grid>

        </Grid>
      </Grid>
    </React.Fragment>
  );
};


export default Chat;