import React, { useEffect, useState } from 'react';
import { useQuery } from 'react-query';
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';

const AllProducts = () => {
    const [laptops, setlaptops] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        fetch('https://morning-sands-87879.herokuapp.com/laptops')
            .then(res => res.json())
            .then(data => {
                setlaptops(data)
            })
    }, [])

    const { data: mobiles, isLoading, refetch } = useQuery('available', () => fetch('https://morning-sands-87879.herokuapp.com/mobiles').then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleMobileDetails = id => {
        navigate(`/productDetails/${id}`)
    }
    const handleLaptopDetails = id => {
        navigate(`/laptopDetails/${id}`)
    }
    const handleBuyNow = (id) => {
        navigate(`/phoneOrder/${id}`)
    }
    const handleBuyNowLaptop = (id) => {
        navigate(`/laptopOrder/${id}`)
    }
    return (
        <div>
            <h1>All Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-x-5 gap-y-10'>
                {
                    mobiles?.map(mobile => <div class="card  bg-base-100 shadow-xl">
                        <figure className=''><img src={mobile.img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title border-t-2">
                                {mobile.name}
                            </h2>
                            <p className='text-sm'><li>Processor {mobile.processor}</li></p>
                            <p className='text-sm'><li>Camera {mobile.camera}</li></p>
                            <p className='text-sm'><li>Display {mobile.display}</li></p>
                            <p className='text-sm'><li>Memory {mobile.memory}</li></p>
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {mobile.price}</span>
                            <div class="card-actions justify-end mt-2">
                                <button onClick={() => handleMobileDetails(mobile._id)} class="badge badge-outline text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center mt-1 mr-2 mb-2">Details</button>
                                <button onClick={() => handleBuyNow(mobile._id)} class="badge badge-outline text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center mt-1 mr-2 mb-2">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }
                {
                    laptops.map(laptop => <div class="card  bg-base-100 shadow-xl">
                        <figure className=''><img className='max-h-60' src={laptop.img} alt="Shoes" /></figure>
                        <div class="card-body">
                            <h2 class="card-title border-t-2">
                                {laptop.title}
                            </h2>
                            <p className='text-sm'><li>Processor {laptop.description.processor}</li></p>
                            <p className='text-sm'><li>Display {laptop.description.display}</li></p>
                            <p className='text-sm'><li>Memory {laptop.description.memory}</li></p>
                            <p className='text-sm'><li>Storage {laptop.description.storage}</li></p>
                            <span className="text-3xl font-bold text-gray-900 dark:text-white">$ {laptop.price}</span>
                            <div class="card-actions justify-end mt-2">
                                <button onClick={() => handleLaptopDetails(laptop._id)} class="badge badge-outline text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center mt-1 mr-2 mb-2">Details</button>
                                <button onClick={() => handleBuyNowLaptop(laptop._id)} class="badge badge-outline text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-4 text-center mt-1 mr-2 mb-2">Buy Now</button>
                            </div>
                        </div>
                    </div>)
                }

            </div>
        </div>
    );
};

export default AllProducts;

