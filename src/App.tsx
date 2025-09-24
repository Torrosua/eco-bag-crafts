import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
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
import PaperBagsPage from "./components/pages/bags/PaperBagsPage";
import LaminatedBagsPage from "./components/pages/bags/LaminatedBagsPage";

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<'uk' | 'en'>('uk');

  const handleLanguageChange = (lang: 'uk' | 'en') => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage currentLang={currentLang} />;
      case 'products':
        return <ProductsPage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'bags':
        return <BagsLandingPage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'bags/kraft-bags-with-handles':
        return <KraftBagsWithHandlesPage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'bags/paper-bags':
        return <PaperBagsPage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'bags/laminated-bags':
        return <LaminatedBagsPage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'paper-twine':
        return <PaperTwinePage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'prices':
        return <PricesPage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'artwork-requirements':
        return <ArtworkRequirementsPage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'how-we-work':
        return <HowWeWorkPage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'blog':
      case 'news':
        return <BlogPage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'contact':
      case 'contacts':
        return <ContactPage currentLang={currentLang} />;
      default:
        return <HomePage currentLang={currentLang} onPageChange={setCurrentPage} />;
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <div className="min-h-screen flex flex-col">
          <Navigation 
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            currentLang={currentLang}
            onLanguageChange={handleLanguageChange}
          />
          <main className="flex-1">
            {renderPage()}
          </main>
          <Footer 
            currentLang={currentLang}
            onPageChange={setCurrentPage}
          />
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
