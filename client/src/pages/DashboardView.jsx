import React from 'react'
import { useParams } from 'react-router-dom'
import Home from './Home';
import Profile from './Profile';
import QRManager from './QRManager';
import Reviews from './Reviews';

const DashboardView = () => {
    const {view} = useParams();
    console.log(view);

    const renderContent = () => {
        switch (view) {
          case 'home':
            return <Home />;
          case 'reviews':
            return <Reviews />;
          case 'profile':
            return <Profile />;
          case 'qr-manager':
            return <QRManager />;
          default:
            return <div><h1>404</h1><p>Page not found.</p></div>;
        }
      };

  return (
    <div className='p-2 w-full'>
        {renderContent()}
    </div>
  )
}

export default DashboardView