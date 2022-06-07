import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const LaptopDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data: laptop, isLoading, refetch } = useQuery(['available', id], () => fetch(`https://morning-sands-87879.herokuapp.com/laptops/${id}`).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }
    const handleBuyNow = id => {
        navigate(`/laptopOrder/${id}`)
    }
    return (
        <div class="card lg:card-side bg-base-100 shadow-xl w-3/5 mx-auto p-10">
            <figure><img className='lg:w-72' src={laptop?.img} alt="Album" /></figure>
            <div class="card-body ">
                <p className='text-3xl font-bold'>{laptop.title}</p>
                <p>Processor  {laptop.description?.processor}</p>
                <p>Display {laptop.description.display}</p>
                <p>Memory {laptop.description.memory}</p>
                <p>Storage {laptop.description.storage}</p>
                <p>Price $ {laptop.price}</p>
                <p> {laptop?.quantity === 0 ? "Out of Stock" : <p className='text-green-400'>In Stock</p>} </p>
                <div class="card-actions justify-center mt-2">
                    <button onClick={() => handleBuyNow(laptop._id)} class="btn text-lg text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default LaptopDetails;