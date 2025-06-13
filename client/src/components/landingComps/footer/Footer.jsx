import Insta from '../../assets/insta.png'
import Facebook from '../../assets/facebook.png'
import LinkedIn from '../../assets/linkedIn.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className="p-4 bg-white border-t border-slate-300">
        <div className="mb-6">
            <div className='p-4'>
                <Link to='/'>
                    <p className="text-indigo-600 lg:text-2xl text-2xl font-semibold flex items-center"><span  className="text-2xl">E</span>asy <span className="text-2xl">O</span>utreach</p>
                </Link>
            </div>
            <div className="grid md:grid-cols-5 px-4 gap-4">
                {/* <div className="grid xs:col-span-2 md:col-span-3 sm:grid-cols-3 gap-4 md:order-1 order-2">
                    <div className="col-span-1 mb-2">
                        <p className="font-medium mb-2">Platform</p>
                        <p className='text-gray-500 py-2'>
                            <button>
                                <Link to='/solutions'>Solutions</Link>
                            </button>
                        </p>
                        <p className='text-gray-500 py-2'>Tutorials</p>
                    </div>
                    <div className="col-span-1  mb-2">
                        <p className="font-medium mb-2">Resources</p>
                        <p className='text-gray-500 py-2'>Knowledge Base</p>
                        <p className='text-gray-500 py-2'>Success Strories</p>
                    </div>
                    <div className="col-span-1  mb-2">
                        <p className="font-medium mb-2">Company</p>
                        <p className='text-gray-500 py-2'>About Easy Outreach</p>
                        <p className='text-gray-500 py-2'>Privacy Center</p>
                    </div>
                </div> */}
                <div className="col-span-1  mb-2">
                    <p className="font-medium mb-2">Find us on social media</p>
                    <div className="flex gap-1">
                        <img className="max-w-[30px]" src={LinkedIn} alt="LinkedIn profile" />
                        <img className="max-w-[30px]" src={Facebook} alt="Facebook profile" />
                        <img className="max-w-[30px]" src={Insta} alt="Instagram profile" />
                    </div>
                </div>
                <div className="flex flex-col gap-3 col-span-1 md:order-3">
                    <div >
                        <div>
                            <p className="font-medium mb-2">Address</p>
                        </div>
                        <div>
                            <p>Sandton, 2191</p>
                            <p>South Africa</p>
                        </div>
                    </div>
                    <div>
                        <div>
                            <p className='font-medium mb-2'>Inquiries</p>
                        </div>
                        <div>
                            <p>+27 76 251 9918</p>
                            <p>hello@easyoutreach.io</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="p-4 border-t-2 text-center">
            <p className="px-4 my-2">Copyright 2024.</p>
        </div>
    </div>
  )
}

export default Footer