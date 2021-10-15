import "./App.css";
import React from "react";
import { Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import { history } from "./redux/ConfigureStore";
import { Button, Grid } from "./elements";
import { useDispatch } from "react-redux";

import { actionCreators as userActions } from "./redux/modules/user";

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
  React.useEffect(() => {
    if (is_local) {
      dispatch(userActions.loginCheckAPI());
    }
  }, []);
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
          <Route path="/chat" exact component={Chat} />
        </ConnectedRouter>
      </Grid>
      <Permit>
        <Button is_float text="+" _onClick={()=>{
          history.push("/write")
        }}></Button>
      </Permit>
    </div>
  );
}

export default App;
