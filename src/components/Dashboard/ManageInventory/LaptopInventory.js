import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';

const LaptopInventory = ({ setLaptop }) => {
    const { data: laptops, isLoading, refetch } = useQuery('laptops', () => fetch('https://morning-sands-87879.herokuapp.com/laptops').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleDelete = (id) => {
        fetch(`https://morning-sands-87879.herokuapp.com/laptops/${id}`, {
            method: "DELETE",
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    window.alert("Deleted from inventory")
                }
                refetch()
            })
    }

    return (
        <div className=' grid grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-3'>
            {
                laptops.map(laptop => < div key={laptop._id}>
                    <div class="card  card-compact bg-base-100 shadow-xl">
                        <figure><img className='min-h-48 max-h-48' src={laptop?.img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <ul class="w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                                <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600">Product:{laptop.title}</li>
                                <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Processor: {laptop.description?.processor}</li>
                                <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Display: {laptop.description?.display}</li>
                                <li class="w-full  px-4 py-2 border-b border-gray-200 dark:border-gray-600">Memory: {laptop.description?.memory}</li>
                                <li class="w-full  px-4 py-2 border-b border-gray-200 dark:border-gray-600">Price: $ {laptop?.price}</li>
                                <li class="w-full  px-4 py-2 border-b border-gray-200 dark:border-gray-600">Quantity:  {laptop?.quantity === 0 ? "Out of Stock" : laptop?.quantity}</li>
                            </ul>
                            <div class="card-actions justify-end py-2">
                                <button onClick={() => handleDelete(laptop?._id)} class="btn btn-sm">Delete</button>
                                <label onClick={() => setLaptop(laptop)} for="laptop-modal" class="btn btn-sm modal-button">Restock</label>
                            </div>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
};

export default LaptopInventory;