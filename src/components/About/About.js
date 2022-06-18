import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const About = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_zyjscge', 'template_4b6q6pb', form.current, 'iXm_neqzYUHqgi1XV')
            .then((result) => {
                if (result.text === "OK") {
                    window.alert("Successful")
                }
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }
    return (

        <div className='grid grid-cols-1 lg:grid-cols-1'>
            <div>
                <h1 className='text-[#04B4E0] text-3xl pt-5 pb-5'>Get In Touch</h1>
                <form onSubmit={sendEmail} ref={form} className='flex  flex-col w-3/4'>
                    <input type="text" placeholder="Name" name="name" className="input input-bordered  w-full max-w-lg" />
                    <input type="email" placeholder="Email" name="email" className="input input-bordered  w-full max-w-lg mt-2" />
                    <input type="text" placeholder="Subject" name="subject" className="input input-bordered  w-full max-w-lg mt-2" />
                    <textarea placeholder="Message" name="message" className='input input-bordered w-full max-w-lg h-40 mt-2'></textarea>
                    <input className='btn w-20 mt-5' type="submit" value="Send" />
                </form>
            </div>
            <div>
                <h1 className='text-[#04B4E0] text-3xl pt-5 pb-5'>Who We Are</h1>
            </div>
        </div>
    );
};

export default About;