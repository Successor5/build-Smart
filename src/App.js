import logo from './logo.svg';
import './App.css';
<<<<<<< HEAD
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Login from './pages/dashBoard/coponents/Login';
import Authentication from './pages/dashBoard/coponents/Authemtication';
import Register from './pages/dashBoard/coponents/Register';
import Welcome from './pages/dashBoard/coponents/Welcome';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Register />} />
          <Route path="page1" element={<Login/>} />
        <Route path="page3" element={< Authentication/>} />
        <Route path="page2" element={<Welcome/>} />

        </Routes>
      </Router>
=======
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
>>>>>>> 55a5b4f02f5e25f968566b9601b55e54540d3a27
    </div>
  );
}

export default App;
