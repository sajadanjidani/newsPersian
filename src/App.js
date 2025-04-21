import './App.css';

import Navbar from './component/navbar/navbar';
import MuiContainer from './component/muiContainer/muiContainer';
import MuiBigBox from './component/muiBigBox/muiBigBox';
import MultiBoxContainer from './component/multiBoxContainer/multiBoxContainer';
import SliderContainer from './component/sliderContainer/sliderContainer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MuiContainer>
        <SliderContainer></SliderContainer>
      </MuiContainer>
      <MuiContainer>
        <MuiBigBox></MuiBigBox>
        <MultiBoxContainer></MultiBoxContainer>
      </MuiContainer>
      <MuiContainer>
        <MultiBoxContainer></MultiBoxContainer>
        <MuiBigBox></MuiBigBox>
      </MuiContainer>
      <MuiContainer>
        <SliderContainer></SliderContainer>
      </MuiContainer>
      <MuiContainer>
        <MuiBigBox></MuiBigBox>
        <MultiBoxContainer></MultiBoxContainer>
      </MuiContainer>
      <MuiContainer>
        <MultiBoxContainer></MultiBoxContainer>
        <MuiBigBox></MuiBigBox>
      </MuiContainer>
      <MuiContainer>
        <SliderContainer></SliderContainer>
      </MuiContainer>
      <MuiContainer>
        <MuiBigBox></MuiBigBox>
        <MultiBoxContainer></MultiBoxContainer>
      </MuiContainer>
      <MuiContainer>
        <MultiBoxContainer></MultiBoxContainer>
        <MuiBigBox></MuiBigBox>
      </MuiContainer>
      <MuiContainer>
        <SliderContainer></SliderContainer>
      </MuiContainer>
    </div>
  );
}

export default App;
