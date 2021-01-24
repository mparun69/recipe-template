import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    const [isHideMenu, setIsHideMenu] = useState(true);

    const burgerMenu = () => {
        setIsHideMenu(!isHideMenu);
    }

    return (
        <div className='col-span-1 md:flex md:justify-end'>
            <div>
                <div className='flex justify-between'>
                    <h1 className='uppercase font-bold py-4 ml-6 border-b border-gray-100 hover:text-gray-700'>Food Ninja</h1>
                    <div className='flex items-center' onClick={burgerMenu}>
                        <svg id='burger' className='w-6 mr-6 items-center md:hidden' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </div>

                </div>
                <div className={isHideMenu?'hidden flex justify-end mt-4 md:block':'block flex justify-end mt-4 md:block'}>
                    <ul >
                        <li className='py-1 px-4 border-r-4 border-red-400'>
                            <Link to='/' className='flex justify-end'>
                                <span className='text-sm text-gray-700 font-bold'>Home</span>
                                <svg className='w-5 mx-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                                </svg>
                            </Link>

                        </li>
                        <li className='py-1 px-4 border-r-4 border-white'>
                            <Link to='/about' className='flex justify-end'>
                                <span className='text-sm'>About</span>
                                <svg className='w-5  mx-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </Link>
                        </li>
                        <li className='py-1 px-4 border-r-4 border-white'>
                            <Link to='/contact' className='flex justify-end'>
                                <span className='text-sm'>Contact</span>
                                <svg className='w-5 mx-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </Link>
                        </li>
                    </ul>
                </div>

            </div>

        </div>
    )
}

export default Nav
