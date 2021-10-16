import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

import { history } from "./redux/ConfigureStore";
import { useDispatch } from "react-redux";

import { actionCreators as userActions } from "./redux/modules/user";

import { Button, DoChat, Grid } from "./elements";
import PostList from "./pages/PostList";
import PostDetail from "./pages/PostDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import PostWrite from "./pages/PostWrite";
import Mypage from "./pages/Mypage";
import Header from "./shared/Header";
import Chat from "./components/Chat";
import Permit from "./shared/Permit";

function App() {
  const dispatch = useDispatch();
  const is_local = localStorage.getItem("MY_TOKEN") ? true : false;
  const socketRef = React.useRef();
  React.useEffect(() => {
    if (is_local) {
      dispatch(userActions.loginCheckAPI());
    }
  }, []);

  const toggleChatBox = (e) => {
    console.log('클릭중')
    let chatDisplay = document.getElementById('chatDisplay')    
    chatDisplay.classList.toggle("active")      
  }

  return (
    <div className="App">
      <Grid margin="auto">
        <Header></Header>
        <ConnectedRouter history={history}>
          <Route path="/" exact component={PostList} />
          <Route path="/post/:id" exact component={PostDetail} />
          <Route path="/login" exact component={Login} />
          <Route path="/signup" exact component={Signup} />
          <Route path="/write" exact component={PostWrite} />
          <Route path="/write/:id" exact component={PostWrite} />
          <Route path="/mypage" exact component={Mypage} />          
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button
          is_float
          text="+"
          _onClick={() => {
            history.push("/write");
          }}
        ></Button>
        <DoChat _onClick={toggleChatBox} >
          <ChatBubbleIcon/>
        </DoChat>
      </Permit>
    </div>
  );
}

export default App;
