import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar/js/Navbar';
import Login from './components/Login/js/Login';
import Register from './components/Register/js/Register';
import Footer from './components/Footer/js/Footer';
import About from './components/About/js/About';
import Home from './components/Home/js/Home';
import Error from './components/Error/js/Error';
import Admin from './components/Admin/js/Admin';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/admin" element={<Admin />} />
        <Route path="/about" element={<About />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
