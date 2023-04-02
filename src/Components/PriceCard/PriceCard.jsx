import React from 'react';
import Feature from '../Feature/Feature';

const PriceCard = ({price}) => {
    return (
        <div className='bg-indigo-400 mt-4 rounded-md p-4 flex flex-col'>
            <h2 className='text-center'>
                <span className='text-5xl font-extrabold text-purple-700'>{price.price}</span>
                <span className='text-2xl text-white  font-semibold'>/mon</span></h2>
            <h1 className='text-2xl text-center my-6'>{price.name}</h1>
            <p className='underline text-xl text-white font-semibold pb-2'>Features:</p>
            {
            price.features.map((feature,idx) =><Feature 
            feature={feature}
            key={idx}
            ></Feature> )
            }
            <button className='w-full mt-auto font-semibold hover:bg-green-400 bg-green-500 text-white py-3 rounded-lg'>Buy Now</button>
            
        </div>
    );
};

export default PriceCard;