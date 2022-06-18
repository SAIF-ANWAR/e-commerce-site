import React from 'react';

const Orders = ({ order, refetch }) => {
    const { _id, productName, quantity, address, totalCost, status } = order

    const handleCancel = () => {
        const url = `https://morning-sands-87879.herokuapp.com/phoneOrders/${_id}`
        fetch(url, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    window.alert("cancelled successfully")
                }
                refetch()
            })
    }
    const handleDelivered = () => {
        const data = {
            status: "delivered"
        }
        const url = `https://morning-sands-87879.herokuapp.com/phoneOrders/${_id}`
        fetch(url, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    window.alert("Status Updated")
                    refetch()
                }

            })

    }

    return (
        <div class="card  card-compact bg-base-100 shadow-xl">
            <figure><img className='min-h-48 max-h-48' src={order?.img} alt="Shoes" /></figure>
            <div class="card-body">
                <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Product: {productName}</li>
                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Quantity: {quantity}</li>
                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Delivery: {address}</li>
                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Total Cost: {totalCost}</li>
                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Status: {status}</li>
                </ul>
                <div class="card-actions justify-end py-2">
                    <button onClick={handleCancel} class="btn btn-sm">Cancel</button>
                    <button onClick={handleDelivered} class="btn btn-sm">Delivered</button>
                </div>
            </div>
        </div>
    );
};

export default Orders;