
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './Pages/About/About';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';
import Home from './Pages/Home/Home';
import ServiceDetails from './Pages/Service-detail/ServiceDetails';
import Register from './Pages/Login/Register/Register'
import Notfound from './Pages/Shared/Notfound/Notfound';
import Login from './Pages/Login/Login';
import CheckOut from './Pages/CheckOut/CheckOut';
import RequiredAuth from './Pages/Login/RequiredAuth/RequiredAuth';

function App() {
  return (
    <div >
      <Header></Header>
      <Routes>
        <Route path = "/" element={<Home></Home>}></Route>
        <Route path = "/home" element={<Home></Home>}></Route>
        <Route path = "/service/:serviceId" element={<ServiceDetails></ServiceDetails>} ></Route>
        <Route path ="/about"  element={<About></About>}></Route>
        <Route path ="/login"  element={<Login></Login>}></Route>
        <Route path ="/register"  element={<Register></Register>}></Route>
        <Route path ="/checkout"  element={<RequiredAuth>
        <CheckOut></CheckOut></RequiredAuth>}></Route>

        <Route path ="*"   element={<Notfound></Notfound>}></Route>

      </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
