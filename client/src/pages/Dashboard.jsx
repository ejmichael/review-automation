import React from 'react'
import Sidebar from '../components/Sidebar'
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom'
import DashboardView from './DashboardView';

const Dashboard = () => {
    const navigate = useNavigate();


  return (
    <div className="bg-slate-100 flex h-[100vh]">
        <Sidebar/>
        <div className='w-full'>
            <Routes>
                <Route path="/" element={<Navigate to="/dashboard/home" />} />
                <Route path="/:view" element={<DashboardView />} />
            </Routes>
        </div>
    </div>
  )
}

export default Dashboard