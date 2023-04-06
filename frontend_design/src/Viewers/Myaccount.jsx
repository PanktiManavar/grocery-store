import React from 'react'
import "./Myaccount.css"
const Myaccount = () => {
    return (
        <div className='bg-gray-50' >
            <div className='mx-auto max-w-screen-2xl px-3 sm:px-10'>
                <div className='py-10 lg:py-12 flex flex-col lg:flex-row w-full'>
                    <div className='flex-shrink-0 w-full lg:w-80 mr-7 lg:mr-10 xl:mr-10 '>
                        <div className='bg-white p-4 sm:p-5 lg:p-8 rounded-md sticky top-32'>
                            <span className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
                                <svg>Image</svg>
                                <a className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600">hello</a>
                            </span>
                        </div>
                    </div>
                    <div className='w-full bg-white mt-4 lg:mt-0 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden'>
                        <div className='overflow-hidden'>
                            <h2 className='text-xl font-serif font-semibold mb-5'>Dashbord</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Myaccount

