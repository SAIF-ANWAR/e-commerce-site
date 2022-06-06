import React from 'react';
import { Link } from 'react-router-dom';
import audience from '../../images/icons/audience.jpg';
import review from '../../images/icons/review.jpg';
import revenue from '../../images/icons/revenue.jpg'

const BusinessOverview = () => {
    return (
        <div className=' mt-10'>
            <h1 className='text-4xl text-center font-bold'>Overview</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 my-12 gap-x-5'>
                <div className="card card-side max-h-max bg-base-100 shadow-xl px-3 flex flex-col items-center justify-center py-4 " >
                    <figure className='px-3 '><img className='max-h-52 rounded-lg py-2' src={audience} alt="help" /></figure>
                    <div className='text-center py-4'>
                        <p className='text-3xl font-bold'>Served</p>
                        <small className='text-center text-2xl'><Link to="/comingSoon"> 10000 + Customers </Link></small>
                    </div>
                </div>
                <div className="card card-side max-h-max bg-base-100 shadow-xl px-3 flex flex-col items-center justify-center py-4" >
                    <figure className='px-3'><img className='max-h-52 rounded-lg py-2' src={review} alt="help" /></figure>
                    <div className='text-center py-4'>
                        <p className='text-3xl font-bold'>Reviews</p>
                        <small className='text-center text-2xl'><Link to="/comingSoon"> 2000 + </Link></small>
                    </div>
                </div>
                <div className="card card-side max-h-max bg-base-100 shadow-xl px-3 flex flex-col items-center justify-center py-4" >
                    <figure className='px-3'><img className='max-h-52 rounded-lg py-2' src={revenue} alt="help" /></figure>
                    <div className='text-center py-4'>
                        <p className='text-3xl font-bold'>Revenue</p>
                        <small className='text-center text-2xl'><Link to="/comingSoon">1000 k+ </Link></small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessOverview;