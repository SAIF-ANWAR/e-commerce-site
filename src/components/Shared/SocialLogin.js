import React from 'react';
import google from '../../images/google.png'

const SocialLogin = () => {
    return (
        <div>
            <div class="divider">OR</div>
            <div className='flex flex-col mx-auto'>

                <button class="btn btn-outline btn-success"> <img className='w-8 h-8' src={google} alt="" /> <span className='pl-5'>Continue with google</span></button>
            </div>
        </div>
    );
};

export default SocialLogin;