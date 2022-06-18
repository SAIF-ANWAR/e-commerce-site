import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/logo/company-logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
import Loading from './Loading';

const Navbar = () => {
    const [user, loading, error] = useAuthState(auth);
    if (loading) {
        return <Loading></Loading>
    }

    const menuBar = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/allProducts">Products</Link></li>
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <li><Link to="/about">About</Link></li>
    </>

    const LogOut = () => {
        signOut(auth)
    }

    return (
        <nav className="navbar bg-base-100 py-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex="0" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuBar}
                    </ul>
                </div>
                <Link to="/" className="btn btn-ghost normal-case text-xl"> <img className='w-16' src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuBar}
                </ul>
            </div>
            <div className="navbar-end">
                {user?.displayName && <button className="btn btn-active btn-sm btn-ghost mr-6"> {user?.displayName} </button>}
                {user ? <button onClick={LogOut} className="btn btn-sm">Sign Out</button> : <Link to="/login" className="btn btn-sm">Login</Link>}
            </div>
        </nav>

    );
};

export default Navbar;
