import React from 'react';
import { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import Inventory from './Inventory';
import LaptopInventory from './LaptopInventory';
import RestockLaptopQuantity from './RestockLaptopQuantity';
import RestockQuantityMobile from './RestockQuantityMobile';


const ManageInventory = () => {
    const [phone, setPhone] = useState(null)
    const [laptop, setLaptop] = useState(null)
    const { data: mobiles, isLoading, refetch } = useQuery('mobiles', () => fetch('https://morning-sands-87879.herokuapp.com/mobiles').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 gap-x-3 gap-y-3 mt-5'>
                {
                    mobiles?.map(mobile => <Inventory key={mobile._id} mobile={mobile} refetch={refetch} setPhone={setPhone}></Inventory>)
                }
            </div>
            <div>
                <h1 className='text-3xl font-bold text-center my-4'>All Laptops</h1>
            </div>
            <LaptopInventory setLaptop={setLaptop}></LaptopInventory>
            <RestockLaptopQuantity laptop={laptop}></RestockLaptopQuantity>
            <RestockQuantityMobile phone={phone}></RestockQuantityMobile>
        </div>
    );
};

export default ManageInventory;