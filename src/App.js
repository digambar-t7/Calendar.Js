import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './app/components/Navbar';
import Home from './app/components/Home';
import Events from './app/components/Events';
import Dashboard from './app/components/Dashboard';
import Login from './app/components/Login';
import CreateAccount from './app/components/CreateAccount';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div id='outer-div'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/events' element={<Events />} />
          <Route path='/login' element={<Login />} />
          <Route path='/login/createaccount' element={<CreateAccount />} />
          <Route path='/adminpanel' element={<Dashboard />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
