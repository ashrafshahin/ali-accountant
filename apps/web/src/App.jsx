
import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Toaster } from '@/components/ui/sonner';
import ScrollToTop from './components/ScrollToTop.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import HomePage from './pages/HomePage.jsx';
import ServicesPage from './pages/ServicesPage.jsx';
import AccountsPreparationPage from './pages/AccountsPreparationPage.jsx';
import BookkeepingPage from './pages/BookkeepingPage.jsx';
import CompanyFormationPage from './pages/CompanyFormationPage.jsx';
import PayrollPensionPage from './pages/PayrollPensionPage.jsx';
import TaxPlanningPage from './pages/TaxPlanningPage.jsx';
import BusinessPlanPage from './pages/BusinessPlanPage.jsx';
import VatReturnPage from './pages/VatReturnPage.jsx';
import TaxReturnPage from './pages/TaxReturnPage.jsx';
import AboutPage from './pages/AboutPage.jsx';
import NewsResourcesPage from './pages/NewsResourcesPage.jsx';
import ContactPage from './pages/ContactPage.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Toaster />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/accounts-preparation" element={<AccountsPreparationPage />} />
        <Route path="/services/bookkeeping" element={<BookkeepingPage />} />
        <Route path="/services/company-formation" element={<CompanyFormationPage />} />
        <Route path="/services/payroll-pension" element={<PayrollPensionPage />} />
        <Route path="/services/tax-planning" element={<TaxPlanningPage />} />
        <Route path="/services/business-plan" element={<BusinessPlanPage />} />
        <Route path="/services/vat-return" element={<VatReturnPage />} />
        <Route path="/services/tax-return" element={<TaxReturnPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/news-resources" element={<NewsResourcesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
