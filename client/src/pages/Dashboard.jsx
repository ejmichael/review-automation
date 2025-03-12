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
    <div className="bg-slate-100 flex h-[100vh]">
        <Sidebar businessID={businessID} />
        <div className='w-full'>
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard