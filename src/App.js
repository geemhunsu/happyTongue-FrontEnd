import './App.css';
import {Grid, Image, Button} from "./elements"
import {Route} from "react-router-dom"
import PostList from "./pages/PostList";
import Login from "./pages/Login";
import Signup from './pages/Signup';

function App() {
  return (
    <div className="App">
      <Grid margin="auto">
        <Route path="/" exact component={PostList}/>
        <Route path="/login" exact component={Login}/>
        <Route path="/signup" exact component={Signup}/>
      </Grid>
    </div>
  );
}

export default App;
