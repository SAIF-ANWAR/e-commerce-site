import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Orders from './Orders';

const ManageOrders = () => {
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://morning-sands-87879.herokuapp.com/phoneOrders`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-3 mt-5'>
                {
                    orders.map(order => <Orders key={order._id} order={order} refetch={refetch}></Orders>)
                }
            </div>
        </div>
    );
};

export default ManageOrders;