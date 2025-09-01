import { Routes, Route } from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import ReviewPage from './pages/ReviewPage';
import DashboardView from './pages/DashboardView';
import Register from './pages/auth/Register';
import Landing from './pages/Landing';
import Pricing from './pages/pricing/Pricing';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Payment from './pages/Payment';
import PaymentCancelled from './pages/paymentURLs/PaymentCancelled';
import PaymentSuccess from './pages/paymentURLs/PaymentSuccess';
import Navbar from '../src/components/landingComps/navbar/Navbar'
import Footer from './components/landingComps/footer/Footer';

function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/pricing" element={<Pricing/>}/>
        <Route exact path="/review/:businessID" element={<ReviewPage/>}/>
        <Route exact path="/login" element={<Login/>}/>
        <Route exact path="/register" element={<Register/>}/>
        <Route exact path="/payment" element={<Payment/>}/>
        <Route path="/success" element={<PaymentSuccess />} />
        <Route path="/cancel" element={<PaymentCancelled />} /> 
        {/* <Route  path="/dashboard/:businessID" element={<Dashboard/>}/> */}
        <Route path="/dashboard/:businessID" element={<Dashboard />}>
          <Route path=":view" element={<DashboardView />} />
        </Route>
        <Route path="/terms-and-conditions" element={<TermsAndConditions/>}/>
        <Route path="/privacy-policy" element={<PrivacyPolicy/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
