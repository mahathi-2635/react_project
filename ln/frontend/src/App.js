import React from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './Header';
import HeroSection from './HeroSection';
import HowWeWork from './HowWeWork';
import ContactUs from './ContactUs';
import Footer from './Footer';
import Login from './components/Login';
import Register from './components/Register';
import ApplyLoan from './components/ApplyLoan';
import PersonalInfo from './components/PersonalInfo';
import ProfessionalInfo from './components/ProfessionalInfo';
import CurrentLoansAssets from './components/CurrentLoansAssets';
import BankDetails from './components/BankDetails';
import KYCDocuments from './components/KYCDocuments';
import LoanAmount from './components/LoanAmount';
import LoanAgreement from './components/LoanAgreement';
import Navbar from './components/Navbar';
import GlobalStyle from './components/GlobalStyle';
import ThankYou from './components/ThankYou';
import './App.css';

const Layout = ({ children }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      <GlobalStyle />
      {showNavbar && <Navbar />}
      {children}
    </>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <HeroSection />
                <HowWeWork />
                <ContactUs />
                <Footer />
              </>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/apply-loan" element={<ApplyLoan />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/professional-info" element={<ProfessionalInfo />} />
          <Route path="/current-loans-assets" element={<CurrentLoansAssets />} />
          <Route path="/bank-details" element={<BankDetails />} />
          <Route path="/kyc-documents" element={<KYCDocuments />} />
          <Route path="/loan-amount" element={<LoanAmount />} />
          <Route path="/loan-agreement" element={<LoanAgreement />} />
          <Route path="/thank-you/:applicationId" element={<ThankYou />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
