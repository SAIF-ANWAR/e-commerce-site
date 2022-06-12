import React from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from './Loading';
import SocialLogin from './SocialLogin';

const Login = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const navigate = useNavigate()
    const location = useLocation()
    let from = location.state?.from?.pathname || "/";
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [gUser, gLoading, gError] = useSignInWithGoogle(auth);

    if (loading || gLoading) {
        return <Loading></Loading>
    }
    if (error || gError) {

        window.alert(`${error.message || gError.message}`)
    }
    if (user || gUser) {
        navigate(from, { replace: true });
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password)


    };
    return (
        <div>
            <h5 className="text-2xl font-medium text-center text-gray-900 dark:text-white mt-10">Sign in to our platform</h5>
            <div className="card card-side bg-base-100 shadow-lg w-2/3 mx-auto p-10 mb-10 flex items-center justify-center">
                <div className='w-2/5 mr-6'>
                    <form className='min-w-full text-center' onSubmit={handleSubmit(onSubmit)}>
                        <input type="email" placeholder="Type Email" className="input input-bordered w-full max-w-xs my-2" {...register("email", { required: true })} />
                        <label className="label">
                            <p className='text-red-500'>{errors.email?.type === 'required' && "Email is required"}</p>
                        </label>
                        <input type="password" placeholder="Type password" className="input input-bordered w-full max-w-xs" {...register("password", { required: true })} />
                        <label className="label">
                            <p className='text-red-500'>{errors.password?.type === 'required' && "Password is required"}</p>
                        </label>
                        <input className="btn btn-outline btn-success w-full max-w-xs my-2" type="submit" value="Log In" />
                        <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
                            Not registered? <Link to="/signUp" className="text-blue-700 hover:underline dark:text-blue-500">Create account</Link>
                        </div>
                    </form>
                </div>
                <div className="divider lg:divider-horizontal w-1/5">OR</div>
                <div className=" w-2/5">
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>


    );
};

export default Login;