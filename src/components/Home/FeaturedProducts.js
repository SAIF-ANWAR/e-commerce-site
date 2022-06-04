import React, { useEffect, useState } from 'react';
import Laptop from './Laptop';
import Mobile from './Mobile';

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([])
    useEffect(() => {
        fetch('https://morning-sands-87879.herokuapp.com/mobiles')
            .then(res => res.json())
            .then(data => setFeaturedProducts(data))
    }, [])
    const [laptops, setlaptops] = useState([])
    useEffect(() => {
        fetch('https://morning-sands-87879.herokuapp.com/laptops')
            .then(res => res.json())
            .then(data => setlaptops(data))
    }, [])

    return (
        <div>
            <h1 className='text-4xl text-center font-bold mb-10'>Featured Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-x-5 gap-y-10'>
                {
                    featuredProducts.slice(0, 4).map(mobile => <Mobile key={mobile._id} mobile={mobile}></Mobile>)
                }
            </div>
            <div className='flex justify-end mr-1 my-3'>
                <button class="btn btn-outline btn-info btn-sm">See All</button>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-x-5 gap-y-10 mt-10'>
                {
                    laptops.slice(0, 4).map(laptop => <Laptop key={laptop._id} laptop={laptop}></Laptop>)
                }
            </div>
            <div className='flex justify-end mr-1 my-3'>
                <button class="btn btn-outline btn-info btn-sm">See All</button>
            </div>
        </div>

    );
};

export default FeaturedProducts;