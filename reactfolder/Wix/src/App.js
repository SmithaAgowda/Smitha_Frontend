import '../src/assets/css/style.css';

import Navbars from './Components/Navbar';
import { BrowserRouter } from 'react-router-dom';
import Main from './Pages/Main';


function App() {
  return (
    <>
       <BrowserRouter> 
      <header>
        <Navbars/>
       
      </header>
      <Main/>
      </BrowserRouter> 
    
    </>
   
  );
}

export default App;
