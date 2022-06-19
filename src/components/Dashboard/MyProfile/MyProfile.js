import React from 'react';
import Profile from './Profile';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query';
import ProfileModal from './ProfileModal';
// import Loading from '../../Shared/Loading';


const MyProfile = () => {

    const [users, setUsers] = useState(null)

    const navigate = useNavigate()
    // console.log(users)

    return (
        <div className='pt-10'>
            <Profile users={users}></Profile>
            <ProfileModal setUsers={setUsers}></ProfileModal>
        </div>
    );
};

export default MyProfile;     