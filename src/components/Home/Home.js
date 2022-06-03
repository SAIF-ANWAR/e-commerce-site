import React from 'react';
import Carousel from './Carousel';
import DownloadApp from './DownloadApp';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <FeaturedProducts></FeaturedProducts>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;


