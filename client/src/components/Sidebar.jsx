import React from 'react';
import { NavLink, useParams } from 'react-router-dom';

const Sidebar = () => {

      const {businessID} = useParams();

  return (
    <div className="w-1/5 bg-white p-4 fixed h-full">
        <div className='p-2 border-b-2 border-blue-400'>
            <h2 className="text-xl my-6 font-semi-bold">Business Portal</h2>
        </div>
      <nav>
        <NavLink
          to={`/dashboard/${businessID}/home`}
          className={({ isActive }) =>
            `block w-full text-left py-2 px-4 my-2 rounded ${isActive ? 'bg-blue-400' : 'hover:bg-blue-400'}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to={`/dashboard/${businessID}/reviews`}
          className={({ isActive }) =>
            `block w-full text-left py-2 px-4 my-2 rounded ${isActive ? 'bg-blue-400' : 'hover:bg-blue-400'}`
          }
        >
          Reviews
        </NavLink>
        <NavLink
          to={`/dashboard/${businessID}/lists`}
          className={({ isActive }) =>
            `block w-full text-left py-2 px-4 my-2 rounded ${isActive ? 'bg-blue-400' : 'hover:bg-blue-400'}`
          }
        >
          Lead Lists
        </NavLink>
        <NavLink
          to={`/dashboard/${businessID}/profile`}
          className={({ isActive }) =>
            `block w-full text-left py-2 px-4 my-2 rounded ${isActive ? 'bg-blue-400' : 'hover:bg-blue-400'}`
          }
        >
          Profile
        </NavLink>
        <NavLink
          to={`/dashboard/${businessID}/qr-manager`}
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
