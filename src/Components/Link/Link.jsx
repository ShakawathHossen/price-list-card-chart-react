import React from 'react';

const Link = (props) => {
    const{id,name,path}=props.route
    return (
        <div>
            <li className='mr-12 hover:text-white duration-500'>
            <a href={path}>{name}</a>
            </li>
       
            
        </div>
    );
};

export default Link;