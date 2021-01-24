import React from 'react';
import { Link } from 'react-router-dom';
import curry from './images/curry.jpeg';
import noodles from './images/nudles.jpeg';
import stew from './images/stew.jpeg';
import './App.css';

const Home = () => {
    return (
        <div className='col-span-2 px-16 py-6'>
            <div className='text-red-400 flex justify-center md:justify-end'>
                <Link className='btn md:border-2 border-red-400 hover:bg-red-400 hover:text-white transition ease-out duration-700' to='/login'>Log In</Link>
                <Link className='btn ml-3 md:border-2 border-red-400 hover:bg-red-400 hover:text-white transition ease-out duration-700' to='/signup'>Sign Up</Link>
            </div>
            <div>
                <h2 className='text-gray-700 text-6xl font-medium'>Recipes</h2>
                <h3 className='text-2xl font-medium'>For Ninjas</h3>
            </div>
            <div>
                <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Latest Recipes</h4>
                <div className='grid md:grid-cols-3 gap-8'>
                    {/* cards go here! */}
                    <div className='card hover:shadow-lg'>
                        <img src={curry} alt="" className="w-full h-32 sm:h-48 object-cover" />
                        <div className='m-4'>
                            <span className="font-bold">Malabar recipe Chicken curry</span>
                            <span className="block text-gray-400 text-sm">Recipe by Mario</span>
                        </div>

                        <div className='badge'>
                            <svg className='w-5 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            25 Mins
                        </div>
                    </div>
                    <div className='card hover:shadow-lg'>
                        <img src={noodles} alt="noodles" className="w-full h-32 sm:h-48 object-cover" />
                        <div className='m-4'>
                            <span className="font-bold">Vegitable noodles</span>
                            <span className="block text-gray-400 text-sm">Recipe by Mario</span>
                        </div>
                        <div className='badge'>
                            <svg className='w-5 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            25 Mins
                            </div>
                    </div>
                    <div className='card hover:shadow-lg'>
                        <img src={stew} alt="stew" className="w-full h-32 sm:h-48 object-cover" />
                        <div className='m-4'>
                            <span className="font-bold">Tofu stew</span>
                            <span className="block text-gray-400 text-sm">Recipe by Mario</span>
                        </div>
                        <div className='badge'>
                            <svg className='w-5 inline-block' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        25 Mins
                        </div>
                    </div>
                </div>
                <h4 className='font-bold mt-12 pb-2 border-b border-gray-200'>Popular Recipes</h4>
            </div>
            <div className='mt-8'>
                {/* cards go here! */}
            </div>
            <div className="flex justify-center">
                <div className='btn bg-gray-200 text-gray-450 hover:shadow-inner transform hover:scale-125 hover:bg-opacity-75 transition ease-out duration-500'>Load more...</div>
            </div>
        </div>
    )
}

export default Home
