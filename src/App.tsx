import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import NotFound from './pages/404Page';
import ContactUs from './pages/ContactusPage';
import AboutUsPage from './pages/AboutUs';
import ServicesPage from './pages/Services';
import ProductsPage from './pages/Products';
import BlogPage from './pages/Blogs';
import QuantumUseCasesPage from './pages/solutions/QuantumComputing';
import AIIntegrationPage from './pages/solutions/AiSolutions';
import QuantumNetworksPage from './pages/solutions/quantumnetworks';
import QuantumEncryptionPage from './pages/solutions/Quantunencrption';
import QuantumMLPage from './pages/solutions/quantumMachinelearning';
import PrivacyPolicyTermsPage from './pages/PrivacyPolicyTermsPage';
import ScrollToTop from './components/scrolltotop';

function App() {
  return (
    <Router>
    <ScrollToTop />

      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/404" element={<NotFound />} />
        <Route path="/contact" element={<Layout><ContactUs /></Layout>} />
        <Route path="/about" element={<Layout><AboutUsPage /></Layout>} />
        <Route path="/services" element={<Layout><ServicesPage /></Layout>} />
        <Route path="/products" element={<Layout><ProductsPage /></Layout>} />
        <Route path="/blogs" element={<Layout><BlogPage /></Layout>} />
        <Route path="/quantumcomputing" element={<Layout><QuantumUseCasesPage /></Layout>} />
        <Route path="/aiintegeration" element={<Layout><AIIntegrationPage /></Layout>} />
         <Route path="/quantumencryption" element={<Layout><QuantumEncryptionPage /></Layout>} />

        <Route path="/quantumnetwork" element={<Layout><QuantumNetworksPage /></Layout>} />
        <Route path="/quantummachinelearning" element={<Layout><QuantumMLPage /></Layout>} />
        <Route path="//privacy-policy-terms" element={<Layout><PrivacyPolicyTermsPage /></Layout>} />











        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </Router>
  );
}

export default App;