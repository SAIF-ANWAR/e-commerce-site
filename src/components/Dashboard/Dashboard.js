import React from 'react';
import { Link, Outlet } from 'react-router-dom';

import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user, loading, error] = useAuthState(auth);
    const [admin, adminLoading] = useAdmin(user)
    console.log(admin)
    if (loading || adminLoading) {
        return <Loading></Loading>
    }
    return (
        <div className="drawer drawer-mobile w-full">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content w-full">
                <Outlet></Outlet>
                <label for="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label for="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">

                    {
                        !admin && <>
                            <li><Link to="/dashboard">My Orders</Link></li>
                            <li><Link to="/dashboard/myProfile">My Profile</Link></li>
                            <li><Link to="/dashboard/AddReview">Add Review</Link></li>
                        </>
                    }
                    {
                        admin && <>
                            <li><Link to="/dashboard/manageOrders">Manage Orders</Link></li>
                            <li><Link to="/dashboard/manageInventory">Manage Inventory</Link></li>
                            <li><Link to="/dashboard/admin">Admin</Link></li>
                            <li><Link to="/dashboard/addMobileItem">Add Phone Inv</Link></li>
                            <li><Link to="/dashboard/addLaptopItem">Add Laptop Inv</Link></li>
                        </>
                    }

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;