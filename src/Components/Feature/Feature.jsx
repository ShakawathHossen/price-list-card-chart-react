import React from 'react';
import { CheckCircleIcon} from '@heroicons/react/24/solid'

const Feature = ({feature}) => {
    return (
        <div className='flex items-center gap-2 pb-2'>
            <CheckCircleIcon className=" text-white h-4 w-4" />
            <span>{feature}</span>
            
        </div>
    );
};

export default Feature;