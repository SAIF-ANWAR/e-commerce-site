import React, { useEffect, useState } from 'react';
import Mobile from './Mobile';

const FeaturedProducts = () => {
    const [featuredProducts, setFeaturedProducts] = useState([])
    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setFeaturedProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mb-5'>Featured Products</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center gap-y-10'>
                {
                    featuredProducts.map(mobile => <Mobile mobile={mobile}></Mobile>)
                }
            </div>
        </div>

    );
};

export default FeaturedProducts;