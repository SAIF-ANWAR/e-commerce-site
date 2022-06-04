import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Shared/Navbar';
import Home from './components/Home/Home';
import SignUp from './components/Shared/SignUp';
import Login from './components/Shared/Login';
import Footer from './components/Shared/Footer';


function App() {

  return (
    <div className='px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
