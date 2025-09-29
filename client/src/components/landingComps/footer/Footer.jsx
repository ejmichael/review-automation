import Insta from '../../../assets/insta.png'
import Facebook from '../../../assets/facebook.png'
import LinkedIn from '../../../assets/linkedIn.png'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-300 ">
      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-center md:text-left">
        
        {/* Brand */}
        <div>
          <Link to="/">
            <p className="text-indigo-600 text-2xl font-bold">
              Easy<span className="text-gray-800"> Reviews</span>
            </p>
          </Link>
          <p className="text-gray-500 mt-2 text-sm">
            Helping businesses collect more reviews & repeat customers on autopilot.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <p className="font-semibold text-gray-800 mb-3">Quick Links</p>
          <ul className="space-y-2 text-gray-500 text-sm">
            <li><Link to="/about-us" className="hover:text-indigo-600">About</Link></li>
            <li><Link to="/how-does-review-automation-work" className="hover:text-indigo-600">How it works</Link></li>
            <li><Link to="/contact-us" className="hover:text-indigo-600">Contact</Link></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div>
          <p className="font-semibold text-gray-800 mb-3">Get in Touch</p>
          <p className="text-gray-500 text-sm">ethan@easy-outreach.com</p>
          <p className="text-gray-500 text-sm mb-3">+27 76 251 9918</p>
          <div className="flex justify-center md:justify-start gap-3 mt-2">
            <a href="#"><img className="w-6 h-6" src={LinkedIn} alt="LinkedIn" /></a>
            <a href="#"><img className="w-6 h-6" src={Facebook} alt="Facebook" /></a>
            <a href="#"><img className="w-6 h-6" src={Insta} alt="Instagram" /></a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-200 py-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} <span className='font-semibold'>Easy Reviews</span>. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
