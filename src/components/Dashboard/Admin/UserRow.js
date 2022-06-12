import React from 'react';


const UserRow = ({ user, refetch }) => {
    const { name, email, userName, role } = user
    const handleAdmin = () => {
        const data = {
            role: "admin"
        }
        const proceed = window.confirm("Are you sure")
        if (proceed) {
            fetch(`https://morning-sands-87879.herokuapp.com/users/${email}`, {
                method: "PUT",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        window.alert("Admin added successfully")
                    }
                    refetch()
                })
        }

    }

    return (

        <tbody className='text-[16px]'>
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
                    {name || userName}
                </th>
                <td class="px-6 py-4">
                    {email}
                </td>

                {
                    role !== "admin" && <td class="px-6 py-4 text-right">
                        <button onClick={handleAdmin} class="font-medium text-white  btn btn-sm">Make Admin</button>
                    </td>
                }
            </tr>

        </tbody>

    );
};

export default UserRow;