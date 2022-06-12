import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading';
import UserRow from './UserRow';

const MakeAdmin = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch(`https://morning-sands-87879.herokuapp.com/allUsers`).then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (

        <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
            <table class="w-3/4 text-sm text-left text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-[18px] text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-6 py-3">
                            User Name
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Email
                        </th>

                        <th scope="col" class="px-6 py-3">
                            <span class="sr-only">Edit</span>
                        </th>
                    </tr>
                </thead>
                {
                    users?.map((user, index) =>
                        <UserRow
                            key={index}
                            index={index}
                            user={user}
                            refetch={refetch}>
                        </UserRow>)
                }
            </table>
        </div>

    );
};

export default MakeAdmin;
