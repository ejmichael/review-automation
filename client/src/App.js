import { Routes, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import ReviewPage from './pages/ReviewPage';
import DashboardView from './pages/DashboardView';
import Register from './pages/auth/Register';
import Landing from './pages/Landing';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/review/:businessID" element={<ReviewPage/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        {/* <Route  path="/dashboard/:businessID" element={<Dashboard/>}/> */}
        <Route path="/dashboard/:businessID" element={<Dashboard />}>
          <Route path=":view" element={<DashboardView />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
