import React from 'react';
import RestockQuantityMobile from './RestockQuantityMobile';

const Inventory = ({ mobile, refetch, setPhone }) => {
    const { _id, name, img, processor, camera, display, memory, price, quantity } = mobile
    const handleDelete = () => {
        fetch(`https://morning-sands-87879.herokuapp.com/mobiles/${_id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    window.alert("Deleted from inventory")
                }
                refetch()
                console.log(data)
            })
    }
    const handleRestock = () => {
        setPhone(mobile)
        // const url = `https://morning-sands-87879.herokuapp.com/mobiles/${_id}`
        // fetch(url, {
        //     method: "PUT",
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify({ quantity })
        // })
        //     .then(res => res.json())
        //     .then(data => {
        //         navigate('/dashboard')
        //         console.log(data)
        //         refetch()
        //     })
    }
    return (
        <div class="card  card-compact bg-base-100 shadow-xl">
            <figure><img className='min-h-48 max-h-48' src={img} alt="Shoes" /></figure>
            <div class="card-body">
                <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                    <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Product: {name}</li>
                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Processor: {processor}</li>
                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Camera: {camera}</li>
                    <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Display: {display}</li>
                    <li class="w-full  px-4 py-2 border-b border-gray-200 dark:border-gray-600">Memory: {memory}</li>
                    <li class="w-full  px-4 py-2 border-b border-gray-200 dark:border-gray-600">Price: $ {price}</li>
                    <li class="w-full  px-4 py-2 border-b border-gray-200 dark:border-gray-600">Quantity: {quantity}</li>
                </ul>
                <div class="card-actions justify-end py-2">
                    <button onClick={handleDelete} class="btn btn-sm">Delete</button>
                    <label onClick={handleRestock} for="my-modal-6" class="btn btn-sm modal-button">Restock</label>
                    {/* <label  class="btn modal-button">open modal</label> */}
                    {/* <RestockQuantityMobile mobile={mobile} refetch={refetch}></RestockQuantityMobile> */}
                </div>
            </div>
        </div>
    );
};

export default Inventory;