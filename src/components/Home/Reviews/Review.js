import React from 'react';

const Review = ({ review }) => {
    return (
        <div>
            <div class="card bg-base-100 shadow-xl">
                <div class="card-body">
                    <p> " {review?.message} "</p>
                    <div class="card-actions justify-center mt-5">
                        <div class="avatar mr-3">
                            <div class="w-8 rounded">
                                <img src="https://api.lorem.space/image/face?hash=33791" alt="Tailwind-CSS-Avatar-component" />
                            </div>
                        </div>
                        <h2 class="card-title">{review?.name}</h2>
                    </div>
                </div>
            </div>
            {/* <div className='flex flex-col'>
                <div>
                    <p> " {review?.message} "</p>
                </div>
                <div className='flex'>
                    <div class="avatar">
                        <div class="w-8 rounded">
                            <img src="https://api.lorem.space/image/face?hash=33791" alt="Tailwind-CSS-Avatar-component" />
                        </div>
                    </div>
                    <div>
                        <h1>
                            
                        </h1>
                    </div>
                </div>
            </div> */}
        </div>
    );
};

export default Review;