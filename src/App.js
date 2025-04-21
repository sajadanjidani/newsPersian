import './App.css';

import Navbar from './component/navbar/navbar';
import MuiContainer from './component/muiContainer/muiContainer';
import MuiBigBox from './component/muiBigBox/muiBigBox';
import MultiBoxContainer from './component/multiBoxContainer/multiBoxContainer';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MuiContainer>
        <MuiBigBox></MuiBigBox>
        <MultiBoxContainer></MultiBoxContainer>
      </MuiContainer>
      <MuiContainer>
        <MultiBoxContainer></MultiBoxContainer>
        <MuiBigBox></MuiBigBox>
      </MuiContainer>
      <MuiContainer>
        
      </MuiContainer>
    </div>
  );
}

export default App;
