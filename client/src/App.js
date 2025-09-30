import { Routes, Route, useLocation } from 'react-router-dom'
import './App.css';
import Dashboard from './pages/Dashboard';
import Login from './pages/auth/Login';
import ReviewPage from './pages/ReviewPage';
import DashboardView from './pages/DashboardView';
import Register from './pages/auth/Register';
import Landing from './pages/Landing';
// import Pricing from './pages/plans/Pricing';
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import Payment from './pages/Payment';
import PaymentCancelled from './pages/paymentURLs/PaymentCancelled';
import PaymentSuccess from './pages/paymentURLs/PaymentSuccess';
// import Navbar from '../src/components/landingComps/navbar/Navbar'
import Footer from './components/landingComps/footer/Footer';
import HowItWorks from './pages/HowItWorks';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import ViewPlan from './pages/plans/ViewPlan';
import Checkout from './pages/checkout/Checkout';
import ReactGA from "react-ga4";
import { useEffect } from 'react';

// Replace with your GA4 Measurement ID
const TRACKING_ID = "G-E80W1E0CKM";  
ReactGA.initialize(TRACKING_ID);

//Track page changes
const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return null;
};

function App() {
  return (
    <div className="App">
     <RouteChangeTracker />
      <Routes>
        <Route exact path="/" element={<Landing/>}/>
        <Route exact path="/about-us" element={<AboutUs/>}/>
        <Route exact path="/how-does-review-automation-work" element={<HowItWorks/>}/>
        <Route path="/plan/:planSlug" element={<ViewPlan />}/>
        <Route path="/checkout/:planSlug" element={<Checkout />}/>
        {/* <Route exact path="/pricing" element={<Pricing/>}/> */}
        <Route exact path="/contact-us" element={<Contact/>}/>
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
