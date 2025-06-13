import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='grid lg:grid-cols-2 lg:px-8 py-4 md:py-5 items-center bg-white'>
        <div className='px-4'>
            <Link to='/'>
            <p className="text-indigo-600 lg:text-2xl text-2xl font-semibold flex items-center"><span  className="md:text-2xl text-xl">E</span>asy <span className="text-2xl">O</span>utreach</p>
            </Link>
        </div>
        <div className='col-span-1 md:flex justify-between hidden'>
            <ul className='flex items-center gap-3'>
                <li className="font-medium mx-2 p-2 hover:text-indigo-600 cursor-pointer hover:underline decoration-double decoration-indigo-400">
                    <button>
                        <Link to='/about-us'>About</Link>
                    </button>
                </li>
                <li className="font-medium mx-2 p-2 hover:text-indigo-600 cursor-pointer hover:underline decoration-double decoration-indigo-400">
                    <button>
                        <Link to='/pricing'>Pricing</Link>
                    </button>
                </li>
                <li className="font-medium mx-2 p-2 hover:text-indigo-600 cursor-pointer hover:underline decoration-double decoration-indigo-400">
                    <button disabled>
                        <Link to='/blog'>Blog</Link>
                    </button>
                </li>
                {/* <li className="font-medium mx-2 p-2 hover:text-indigo-600 cursor-pointer hover:underline decoration-double decoration-indigo-400">
                    <button>
                        <Link to='/demo'>Demo</Link>
                    </button>
                </li> */}
            </ul>
            <div>
                <Link to='/contact-us'>
                    <button className='py-2 px-5 border border-indigo-800 rounded-3xl hover:text-white text-indigo-800 hover:bg-indigo-600'>Contact Us</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Navbar