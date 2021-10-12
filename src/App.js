import './App.css';
import {Grid, Image, Button} from "./elements"
import {Route, Provider} from "react-router-dom"
import PostList from "./pages/PostList";
import Header from './shared/Header';

function App() {
  return (
    <div className="App">
      <Grid margin="auto">
        <Header></Header>
        <Route path="/" exact component={PostList}/>
      </Grid>
    </div>
  );
}

export default App;
