import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import HomePage from "./components/pages/HomePage";
import AboutPage from "./components/pages/AboutPage";
import ProductsPage from "./components/pages/ProductsPage";
import HowWeWorkPage from "./components/pages/HowWeWorkPage";
import BlogPage from "./components/pages/BlogPage";
import ContactPage from "./components/pages/ContactPage";
import PricesPage from "./components/pages/PricesPage";
import ArtworkRequirementsPage from "./components/pages/ArtworkRequirementsPage";
import BagsLandingPage from "./components/pages/bags/BagsLandingPage";
import KraftBagsWithHandlesPage from "./components/pages/bags/KraftBagsWithHandlesPage";
import PaperTwinePage from "./components/pages/PaperTwinePage";
import PaperCuttingPage from "./components/pages/PaperCuttingPage";
import PaperBagsPage from "./components/pages/bags/PaperBagsPage";
import LaminatedBagsPage from "./components/pages/bags/LaminatedBagsPage";
import ClutchBagsPage from "./components/pages/bags/ClutchBagsPage";
import KraftBagsWithPrintPage from "./components/pages/bags/KraftBagsWithPrintPage";
import EcoCardboardBagsPage from "./components/pages/bags/EcoCardboardBagsPage";
import ComponentsLandingPage from "./components/pages/components/ComponentsLandingPage";
import PaperHandlesPage from "./components/pages/components/PaperHandlesPage";
import HandlesWithTipsPage from "./components/pages/components/HandlesWithTipsPage";
import EyeletsPage from "./components/pages/components/EyeletsPage";

interface RouterProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const Router = ({ currentLang, onPageChange }: RouterProps) => {
  const [currentPage, setCurrentPage] = useState('home');

  // Get current route from URL
  useEffect(() => {
    const path = window.location.pathname;
    const page = getPageFromPath(path);
    setCurrentPage(page);
  }, []);

  // Update URL when page changes
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    onPageChange(page);
    
    // Update URL without page reload
    const path = getPathFromPage(page);
    window.history.pushState({}, '', path);
  };

  const getPageFromPath = (path: string): string => {
    if (path === '/') return 'home';
    if (path === '/about') return 'about';
    if (path === '/products') return 'products';
    if (path === '/bags') return 'bags';
    if (path === '/bags/paper-bags') return 'bags/paper-bags';
    if (path === '/bags/laminated-bags') return 'bags/laminated-bags';
    if (path === '/bags/kraft-bags-with-print') return 'bags/kraft-bags-with-print';
    if (path === '/bags/kraft-bags-with-handles') return 'bags/kraft-bags-with-handles';
    if (path === '/bags/clutch-bags') return 'bags/clutch-bags';
    if (path === '/bags/eco-cardboard-bags') return 'bags/eco-cardboard-bags';
    if (path === '/components') return 'components';
    if (path === '/components/paper-handles') return 'components/paper-handles';
    if (path === '/components/handles-with-tips') return 'components/handles-with-tips';
    if (path === '/components/eyelets') return 'components/eyelets';
    if (path === '/paper-twine') return 'paper-twine';
    if (path === '/paper-cutting') return 'paper-cutting';
    if (path === '/prices') return 'prices';
    if (path === '/artwork-requirements') return 'artwork-requirements';
    if (path === '/how-we-work') return 'how-we-work';
    if (path === '/news') return 'news';
    if (path === '/contacts') return 'contacts';
    return 'home';
  };

  const getPathFromPage = (page: string): string => {
    if (page === 'home') return '/';
    if (page === 'blog' || page === 'news') return '/news';
    if (page === 'contact' || page === 'contacts') return '/contacts';
    return `/${page}`;
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage currentLang={currentLang} />;
      case 'products':
        return <ProductsPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'bags':
        return <BagsLandingPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'bags/kraft-bags-with-handles':
        return <KraftBagsWithHandlesPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'bags/paper-bags':
        return <PaperBagsPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'bags/laminated-bags':
        return <LaminatedBagsPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'bags/clutch-bags':
        return <ClutchBagsPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'bags/kraft-bags-with-print':
        return <KraftBagsWithPrintPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'bags/eco-cardboard-bags':
        return <EcoCardboardBagsPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'components':
        return <ComponentsLandingPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'components/paper-handles':
        return <PaperHandlesPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'components/handles-with-tips':
        return <HandlesWithTipsPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'components/eyelets':
        return <EyeletsPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'paper-twine':
        return <PaperTwinePage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'paper-cutting':
        return <PaperCuttingPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'prices':
        return <PricesPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'artwork-requirements':
        return <ArtworkRequirementsPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'how-we-work':
        return <HowWeWorkPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'blog':
      case 'news':
        return <BlogPage currentLang={currentLang} onPageChange={handlePageChange} />;
      case 'contact':
      case 'contacts':
        return <ContactPage currentLang={currentLang} />;
      default:
        return <HomePage currentLang={currentLang} onPageChange={handlePageChange} />;
    }
  };

  return renderPage();
};

export default Router;