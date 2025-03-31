import React, { useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import { Navigate, Route, Outlet, Routes, useNavigate, useParams } from 'react-router-dom'
import DashboardView from './DashboardView';

const Dashboard = () => {
    const navigate = useNavigate();
    const { businessID, view } = useParams();
    
    useEffect(() => {
      if (!view) {
          navigate(`/dashboard/${businessID}/home`, { replace: true });
      }
  }, [businessID, navigate]);


  return (
    <div className="bg-slate-100 h-screen flex ">
        
                <Sidebar businessID={businessID} />

            <div className="ml-[20%] w-[80%] h-screen overflow-auto p-4">
                <Outlet />
            </div>
    </div>
  )
}

export default Dashboard