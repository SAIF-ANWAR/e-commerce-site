import React from 'react';
import { Link } from 'react-router-dom';
import help from '../../images/icons/help.png';
import contact from '../../images/icons/contact.png';
import route from '../../images/icons/route.png';

const ExtraSection = () => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 px-12 gap-x-1'>
            <div className="card card-side shadow-xl px-3 flex items-center justify-center py-4 bg-slate-300 hover:bg-base-100" >
                <figure className='px-3'><img className='w-16' src={help} alt="help" /></figure>
                <div>
                    <p className='font-bold'>Need Help ?</p>
                    <small><Link to="/comingSoon">Ask Questoins and ge instant answers </Link></small>
                </div>
            </div>
            <div className="card card-side shadow-xl px-3 flex items-center justify-center py-4 bg-slate-300 hover:bg-base-100" >
                <figure className='px-3'><img className='w-16' src={contact} alt="help" /></figure>
                <div>
                    <p className='font-bold'>My Account</p>
                    <small><Link to="/comingSoon"> Check your status at any time </Link></small>
                </div>
            </div>
            <div className="card card-side  shadow-xl px-3 flex items-center justify-center py-4 bg-slate-300 hover:bg-base-100" >
                <figure className='px-3'><img className='w-16' src={route} alt="help" /></figure>
                <div>
                    <p className='font-bold'>Track My Order</p>
                    <small><Link to="/comingSoon">Ask Questoins and ge instant answers </Link></small>
                </div>
            </div>
        </div>
    );
};

export default ExtraSection;