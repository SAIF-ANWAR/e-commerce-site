import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';

const ProductDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate()
    const { data: mobile, isLoading, refetch } = useQuery(['available', id], () => fetch(`https://morning-sands-87879.herokuapp.com/mobiles/${id}`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    const handleBuyNow = (id) => {
        navigate(`/phoneOrder/${id}`)
    }
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl w-3/5 mx-auto p-10">
            <figure><img className='lg:w-72' src={mobile?.img} alt="Album" /></figure>
            <div className="card-body ">
                <p className='text-3xl font-bold'>{mobile.name}</p>
                <p>Processor {mobile.processor}</p>
                <p>Camera {mobile.camera}</p>
                <p>Display {mobile.display}</p>
                <p>Memory {mobile.memory}</p>
                <p>Price $ {mobile.price}</p>
                <p> {mobile?.quantity === 0 ? "Out of Stock" : <p className='text-green-400'>In Stock</p>} </p>
                <div className="card-actions justify-center mt-2">
                    <button onClick={() => handleBuyNow(mobile._id)} className="btn text-lg text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 w-full">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;