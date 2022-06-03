import React from 'react';
import carouselImg from '../../images/carousel/carousel1 (1).jpg'

const Carousel = () => {
    return (
        <div class="hero min-h-screen">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={carouselImg} class="max-w-sm rounded-lg shadow-2xl " alt='carousel' />
                <div>
                    <h1 class="text-5xl font-bold">Box Office News!</h1>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Explore</button>
                </div>
            </div>
        </div>


    );
};

export default Carousel;