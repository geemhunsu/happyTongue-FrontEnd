import logo from './logo.svg';
import './App.css';
import {Grid, Image, Button} from "./elements"


function App() {
  return (
    <div className="App">
      <Grid>
        <Image/>
        <Button btn_color="yellow" font_color="blue" text="버튼"/>
        <Button is_float text="버튼쿤쿤"/>
      </Grid>
    </div>
  );
}

export default App;
