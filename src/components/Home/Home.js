import React from 'react';
import BusinessOverview from './BusinessOverview';
import Carousel from './Carousel';
import FeaturedCategory from './Category/FeaturedCategory';
import DownloadApp from './DownloadApp';
import ExtraSection from './ExtraSection';
import FeaturedProducts from './FeaturedProducts';

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <FeaturedProducts></FeaturedProducts>
            <FeaturedCategory></FeaturedCategory>
            <ExtraSection></ExtraSection>
            <BusinessOverview></BusinessOverview>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;


