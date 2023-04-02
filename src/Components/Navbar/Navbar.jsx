import React, { useState } from 'react';
import Link from '../Link/Link';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Contact", path: "/contact" },
        { id: 4, name: "Blog", path: "/blog" },
        { id: 5, name: "Dashboard", path: "/dashboard" },
        { id: 6, name: "Profile", path: "/dashboard/profile" },
    ];

    return (
        <nav className='bg-purple-400 px-5'>
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                <span>
                    {open === true ?
                        <XMarkIcon className="h-10 w-10 text-gray-900" /> :
                        <Bars3Icon className="h-19 w-10 text-gray-900" />}
                </span>


            </div>
            <ul className={`md:flex absolute md:static duration-300 bg-purple-400 pl-6
            pb-4 md:p-6 text-2xl ${open?'top-10':'-top-56'}`}>
                {
                    routes.map(route => <Link route={route} key={route.id}></Link>)
                }
            </ul>

        </nav>
    );
};

export default Navbar;