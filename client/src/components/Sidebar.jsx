import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-1/4 bg-white p-4">
        <div className='p-2 border-b-2 border-blue-400'>
            <h2 className="text-xl my-6 font-semi-bold">Business Portal</h2>
        </div>
      <nav>
        <NavLink
          to="/dashboard/home"
          className={({ isActive }) =>
            `block w-full text-left py-2 px-4 my-2 rounded ${isActive ? 'bg-blue-400' : 'hover:bg-blue-400'}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/dashboard/reviews"
          className={({ isActive }) =>
            `block w-full text-left py-2 px-4 my-2 rounded ${isActive ? 'bg-blue-400' : 'hover:bg-blue-400'}`
          }
        >
          Reviews
        </NavLink>
        <NavLink
          to="/dashboard/profile"
          className={({ isActive }) =>
            `block w-full text-left py-2 px-4 my-2 rounded ${isActive ? 'bg-blue-400' : 'hover:bg-blue-400'}`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to="/dashboard/qr-manager"
          className={({ isActive }) =>
            `block w-full text-left py-2 px-4 my-2 rounded ${isActive ? 'bg-blue-400' : 'hover:bg-blue-400'}`
          }
        >
          QR- Manager
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
