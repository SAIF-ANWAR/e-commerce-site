import React from 'react';
import { useForm } from "react-hook-form";
import SocialLogin from './SocialLogin';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import Loading from './Loading';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const navigate = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [updateProfile, updating] = useUpdateProfile(auth);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    if (user) {
        navigate('/dashboard')
    }
    if (loading || updating) {
        return <Loading></Loading>
    }
    const onSubmit = async (user) => {
        await createUserWithEmailAndPassword(user?.email, user?.password)
        await updateProfile({ displayName: user?.name });
        if (updating) {
            return <Loading></Loading>
        }
        const email = user?.email
        const name = user?.name
        const data = {
            userName: name,
            email: email,
        }

        fetch(`https://morning-sands-87879.herokuapp.com/user/registeredUser/${email}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged === true) {
                    window.alert("Successfully created account")
                }
            })
    };
    return (
        <div>
            <h5 className="text-2xl font-medium text-center text-gray-900 dark:text-white mt-10">Create your account</h5>
            <div className="card card-side bg-base-100 shadow-lg  mx-auto p-10 mb-10 w-4/5 flex items-center justify-center">
                <div className='w-4/6'>
                    <form onSubmit={handleSubmit(onSubmit)} className="p-5 w-full">
                        <div className="mb-5">
                            <label for="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                            <input type="text" id="name" placeholder='Your Name' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" {...register("name", { required: true, maxLength: 20 })} />
                            <span className="label-text-alt text-red-500">{errors?.name && "Please provide your name"}</span>
                        </div>
                        <div className="mb-5">
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" id="email" placeholder='Your Email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" {...register("email", { required: true })} />
                            <span className="label-text-alt text-red-500">{errors?.email && "Please provide your email"}</span>
                        </div>
                        <div className='mb-5 flex w-full'>
                            <div className='w-1/2 pr-1'>
                                <input placeholder='Password' type="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" {...register("password", { required: true })} />
                            </div>
                            <div className='w-1/2 pl-1'>
                                <input placeholder='Confirm password' type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  {...register("confirmPassword", { required: true })} />
                            </div>
                        </div>
                        <div className="flex items-start mb-5">
                            <div className="flex items-center h-5">
                                <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required />
                            </div>
                            <label for="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the
                                <a href="/" className="text-blue-600 hover:underline dark:text-blue-500"> terms and conditions</a></label>
                        </div>
                        <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500  hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 focus:outline-none  font-medium rounded-lg text-sm px-5 py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Create new account</button>
                    </form>
                </div>
                <div className="divider lg:divider-horizontal w-1/5">OR</div>
                <div className='w-2/6'>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>

    );
};

export default SignUp;