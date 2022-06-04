import React from 'react';
import BusinessOverview from './BusinessOverview';
import Carousel from './Carousel';
import DownloadApp from './DownloadApp';
import ExtraSection from './ExtraSection';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <FeaturedProducts></FeaturedProducts>
            <BusinessOverview></BusinessOverview>
            <ExtraSection></ExtraSection>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;


