import React from 'react';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useState } from 'react';
import { useEffect } from 'react';

const MyOrders = () => {
    const [user, loading, error] = useAuthState(auth);
    const [phoneOrders, setphoneOrders] = useState([])
    useEffect(() => {
        fetch(`https://morning-sands-87879.herokuapp.com/phoneOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => {
                setphoneOrders(data)
            })

    }, [user?.email])
    if (loading) {
        return <Loading></Loading>
    }
    // const email = user?.email
    // const { data: phoneOrders, isLoading, refetch } = useQuery(['available', email], () => fetch(`https://morning-sands-87879.herokuapp.com/phoneOrders/${email}`).then(res => res.json()))
    // if (isLoading || loading) {
    //     return <Loading></Loading>
    // }


    return (
        <div>
            <h1 className='my-3'>My Orders</h1>
            <div className=' grid grid-cols-1 lg:grid-cols-2'>
                {
                    phoneOrders?.map(order => <>
                        <div class="card card-compact  bg-base-100 shadow-xl">
                            <figure><img className='max-h-48 w-3/4' src={order?.img} alt="Shoes" /></figure>
                            <div class="card-body">
                                <h2 class="card-title"></h2>
                                <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Profile: {order?.productName}</li>
                                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Quantity: {order?.quantity}</li>
                                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Delivery: {order?.address}</li>
                                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Total Cost: {order?.totalCost}</li>

                                </ul>

                                <div class="card-actions justify-end">
                                    <button class="btn bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Pay Now</button>
                                </div>
                            </div>
                        </div>
                    </>)
                }
            </div>
        </div>
    );
};

export default MyOrders;