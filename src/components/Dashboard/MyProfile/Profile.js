import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Profile = () => {
    const [user, loading] = useAuthState(auth);
    const { data: users, isLoading } = useQuery('user', () => fetch(`https://morning-sands-87879.herokuapp.com/users/${user?.email}`).then(res => res.json()))
    if (isLoading || loading) {
        return <Loading></Loading>
    }
    return (
        <div className='w-full'>
            <ul class="w-3/4 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                <li class="w-full px-4 py-2 border-b border-gray-200 rounded-t-lg dark:border-gray-600 flex items-center ">
                    <div class="relative w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600 mr-4">
                        <svg class="absolute w-12 h-12 text-gray-400 -left-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                    </div>
                    <span className='text-xl font-bold'>{users?.name}</span> </li>
                <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Email: {users?.email}</li>
                <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600">Phone: {users?.phone} </li>
                <li class="w-full px-4 py-2 rounded-b-lg"> <span className='text-[18px] py-2'>Address</span>
                    <ul class="w-full mt-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"> House: {users?.house}</li>
                        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"> Street: {users?.street}</li>
                        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"> Village/City: {users?.city}  </li>
                        <li class="w-full px-4 py-2 border-b border-gray-200 dark:border-gray-600"> Country: {users?.country} </li>
                    </ul>
                </li>
            </ul>
            <div className='w-2/4 mx-auto mt-5'>
                <label for="my-modal-6" class="btn modal-button mx-auto">Update Profile</label>
            </div>
        </div>
    );
};

export default Profile;