import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="drawer drawer-mobile">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content ">
                <Outlet></Outlet>
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Orders</Link></li>
                    <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                    <li><Link to="/dashboard/AddReview">Add Review</Link></li>
                    <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                    <li><Link to="/dashboard/manageInventory">Manage Inventory</Link></li>
                    <li><Link to="/dashboard/admin">Admin</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;