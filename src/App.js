import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Shared/Navbar';
import Home from './components/Home/Home';
import SignUp from './components/Shared/SignUp';
import Login from './components/Shared/Login';
import Footer from './components/Shared/Footer';
import About from './components/About/About';
import AllProducts from './components/AllProducts/AllProducts';
import ProductDetails from './components/AllProducts/ProductDetails';
import LaptopDetails from './components/AllProducts/LaptopDetails';
import PhoneOrder from './components/Order/PhoneOrder';
import LaptopOrder from './components/Order/LaptopOrder';
import Dashboard from './components/Dashboard/Dashboard';
import MyOrders from './components/Dashboard/MyOrders/MyOrders';
import AddReview from './components/Dashboard/AddReview/AddReview';
import MyProfile from './components/Dashboard/MyProfile/MyProfile';
import ManageOrders from './components/Dashboard/ManageOrders/ManageOrders';
import MakeAdmin from './components/Dashboard/Admin/MakeAdmin';
import ManageInventory from './components/Dashboard/ManageInventory/ManageInventory';
import RequireAuth from './components/Shared/RequireAuth/RequireAuth';
import RequireAdmin from './components/Shared/RequireAdmin/RequireAdmin';
import AddItem from './components/Dashboard/AddItem/AddItem';
import AddLaptopItem from './components/Dashboard/AddItem/AddLaptopItem';



function App() {

  return (
    <div className='px-12'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/contact' element={<About></About>}></Route>
        <Route path='/allProducts' element={<AllProducts></AllProducts>}></Route>
        <Route path='/productDetails/:id' element={<ProductDetails></ProductDetails>}></Route>
        <Route path='/laptopDetails/:id' element={<LaptopDetails></LaptopDetails>}></Route>
        <Route path='/phoneOrder/:id' element={<PhoneOrder></PhoneOrder>}></Route>
        <Route path='/laptopOrder/:id' element={<LaptopOrder></LaptopOrder>}></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard></Dashboard>
          </RequireAuth>
        }>
          <Route index element={<MyOrders></MyOrders>}></Route>
          <Route path='/dashboard/myProfile' element={<MyProfile></MyProfile>}></Route>
          <Route path='/dashboard/AddReview' element={<AddReview></AddReview>}></Route>
          <Route path='/dashboard/manageOrders' element={
            <RequireAdmin>
              <ManageOrders></ManageOrders>
            </RequireAdmin>
          }></Route>
          <Route path='/dashboard/manageInventory' element={
            <RequireAdmin>
              <ManageInventory></ManageInventory>
            </RequireAdmin>
          }></Route>
          <Route path='/dashboard/addMobileItem' element={
            <RequireAdmin>
              <AddItem></AddItem>
            </RequireAdmin>
          }></Route>
          <Route path='/dashboard/addLaptopItem' element={
            <RequireAdmin>
              <AddLaptopItem></AddLaptopItem>
            </RequireAdmin>
          }></Route>
          <Route path='/dashboard/admin' element={
            <RequireAdmin>
              <MakeAdmin></MakeAdmin>
            </RequireAdmin>
          }></Route>
        </Route>
        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
