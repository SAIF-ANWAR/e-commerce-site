import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Review from './Review';

const Reviews = () => {
    const { data: reviews, isLoading } = useQuery('review', () => fetch(`https://morning-sands-87879.herokuapp.com/reviews`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h1 className='text-4xl text-center font-bold mt-10'>Reviews</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-x-3'>
                {
                    reviews?.map((review, index) => <Review key={index} review={review}></Review>)
                }

            </div>
        </div>
    );
};

export default Reviews;