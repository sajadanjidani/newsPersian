import './App.css';

import Navbar from './component/navbar/navbar';
import MuiContainer from './component/muiContainer/muiContainer';
import MuiBigBox from './component/muiBigBox/muiBigBox';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MuiContainer>
        <MuiBigBox></MuiBigBox>
      </MuiContainer>
    </div>
  );
}

export default App;
