import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialLogin';

const Login = () => {
    return (
        <div>
            <h5 className="text-2xl font-medium text-center text-gray-900 dark:text-white mt-10">Sign in to our platform</h5>
            <div className="card card-side bg-base-100 shadow-lg w-2/3 mx-auto p-10 mb-10 flex items-center justify-center">
                <div className='w-2/5 mr-6'>
                    <form className="space-y-6" action="#">
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
                            <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
                        </div>
                        <div className="flex items-start">
                            <div className="flex items-start">
                                <div className="flex items-center h-5">
                                    <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
                                </div>
                                <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                            </div>
                            <Link to="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</Link>
                        </div>
                        <button type="button" className=" text-white bg-gradient-to-r from-cyan-500 to-blue-500  hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Log in</button>

                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <Link to="/signUp" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                        </div>
                    </form>
                </div>
                <div className="divider lg:divider-horizontal w-1/5">OR</div>
                <div className=" w-2/5">
                    <SocialLogin></SocialLogin>
                    {/* <button className="btn btn-outline btn-success flex"> <img className='w-6 h-6' src={google} alt="" /> <span className=' text-sm'>Continue with google</span></button> */}
                </div>
            </div>
        </div>
        // <div className="p-4 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700">
        //     <form className="space-y-6" action="#">
        //         <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        //         <div>
        //             <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
        //             <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required="" />
        //         </div>
        //         <div>
        //             <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your password</label>
        //             <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required="" />
        //         </div>
        //         <div className="flex items-start">
        //             <div className="flex items-start">
        //                 <div className="flex items-center h-5">
        //                     <input id="remember" type="checkbox" value="" className="w-4 h-4 bg-gray-50 rounded border border-gray-300 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800" required="" />
        //                 </div>
        //                 <label for="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
        //             </div>
        //             <a href="#" className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
        //         </div>
        //         <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Log in</button>

        //         <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
        //             Not registered? <a href="/signUp" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
        //         </div>
        //     </form>
        //     <SocialLogin></SocialLogin>
        // </div>

    );
};

export default Login;