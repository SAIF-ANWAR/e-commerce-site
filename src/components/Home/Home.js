import React from 'react';
import BusinessOverview from './BusinessOverview';
import Carousel from './Carousel';
import FeaturedCategory from './Category/FeaturedCategory';
import DownloadApp from './DownloadApp';
import ExtraSection from './ExtraSection';
import FeaturedProducts from './FeaturedProducts';
import Reviews from './Reviews/Reviews';

const Home = () => {
    return (
        <div>
            {/* <Slides></Slides> */}
            <Carousel></Carousel>
            <FeaturedProducts></FeaturedProducts>
            <FeaturedCategory></FeaturedCategory>
            <ExtraSection></ExtraSection>
            <Reviews></Reviews>
            <BusinessOverview></BusinessOverview>
            <DownloadApp></DownloadApp>
        </div>
    );
};

export default Home;


