import './App.css';
import {Grid, Image, Button} from "./elements"
import {Route} from "react-router-dom"
import PostList from "./pages/PostList";

function App() {
  return (
    <div className="App">
      <Grid margin="auto">
        <Route path="/" exact component={PostList}/>
      </Grid>
    </div>
  );
}

export default App;
