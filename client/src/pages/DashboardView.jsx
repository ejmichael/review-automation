import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Home from './Home';
import Profile from './Profile';
import QRManager from './QRManager';
import Reviews from './Reviews';
import axios from 'axios';
import LeadLists from './LeadLists';

const DashboardView = () => {
    const {businessID, view} = useParams();
    const [businessInfo, setBusinessInfo] = useState(null);

    const domain = window.location.href.includes('localhost') ? "http://localhost:5000" : "https://review-automation-backend.onrender.com";


    useEffect(() => {
      const getBusinessInfo = async() => {
        //console.log("Fetching business data");
        
        try {
          const businessData = await axios.get(`${domain}/business/get-business-info/${businessID}`)
          console.log(businessData.data);
          
          setBusinessInfo(businessData.data)
        } catch (error) {
          console.error("Error fetching business data:", error);
        }
      }
      getBusinessInfo()
    }, [businessID])

    const renderContent = () => {
        switch (view) {
          case 'home':
            return <Home businessInfo={businessInfo} />;
          case 'reviews':
            return <Reviews reviews={businessInfo.reviews} />;
          case 'profile':
            return <Profile businessInfo={businessInfo} />;
          case 'lists':
            return <LeadLists businessInfo={businessInfo} />;
          case 'qr-manager':
            return <QRManager businessInfo={businessInfo} />;
          default:
            return <div><h1>404</h1><p>Page not found.</p></div>;
        }
      };

  return (
    <div className='p-2 w-full'>
        {businessInfo ? renderContent() : <p>Loading {view} data...</p>}
    </div>
  )
}

export default DashboardView