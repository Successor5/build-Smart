import logo from './logo.svg';
import './App.css';
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
    </div>
  );
}

export default App;
