import React, { useEffect, useState } from 'react';
import PriceCard from '../PriceCard/PriceCard';

const PriceList = () => {
    const[prices,setPrices]=useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setPrices(data))
    },[])
    return (
        <div className='mx-12'>
            <h2 className='text-6xl text-center font-semibold bg-purple-200 py-2 mt-5'>Awosome Price</h2>

           <div className='grid md:grid-cols-3 gap-3'>
           {
                prices.map(price=><PriceCard
                key={price.id}
                price={price}
                ></PriceCard>)
            }
           </div>
        </div>
    );
};

export default PriceList;