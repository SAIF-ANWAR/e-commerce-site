import React from 'react';
import { Link } from 'react-router-dom';

const Category = ({ logo }) => {
    const { name, img } = logo
    return (

        <div className='mb-8'>
            <Link to="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <img className='rounded-lg' src={img} alt="" />
                <h1 className='text-center mt-3 font-bold my-2 uppercase'>{name}</h1>
            </Link>
        </div>

    );
};

export default Category;