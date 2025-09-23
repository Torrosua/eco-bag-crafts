import { useState } from 'react';
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

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentLang, setCurrentLang] = useState<'uk' | 'en'>('uk');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutPage currentLang={currentLang} />;
      case 'products':
        return <ProductsPage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'how-we-work':
        return <HowWeWorkPage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'blog':
        return <BlogPage currentLang={currentLang} onPageChange={setCurrentPage} />;
      case 'contact':
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
            onLanguageChange={setCurrentLang}
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
