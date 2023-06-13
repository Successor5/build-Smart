import logo from './logo.svg';
import './App.css';
import Register from './pages/dashBoard/coponents/Register';
import Login from './pages/dashBoard/coponents/Login';
import { useEffect } from 'react';
import Authentication from './pages/dashBoard/coponents/Authemtication';
function App() {
  // useEffect( () => {
  //   google.accounts.id.initialize
  // },[]) ;
  return (
    
    <div className="App">
      <Authentication/>
      {/* <Login/> */}
      {/* <Register/> */}
    </div>
  );
}

export default App;
