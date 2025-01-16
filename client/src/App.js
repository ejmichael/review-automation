import { Routes, Route, Link } from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import ReviewPage from './pages/ReviewPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/review/:businessID" element={<ReviewPage/>}/>

        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/dashboard/" element={<Dashboard/>}>
          <Route path=":view" element={<Dashboard/>}/>
        </Route>

      </Routes>
    </div>
  );
}

export default App;
