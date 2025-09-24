import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Router from "./Router";

const queryClient = new QueryClient();

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const { i18n } = useTranslation();
  const [currentLang, setCurrentLang] = useState<'uk' | 'en'>('uk');

  const handleLanguageChange = (lang: 'uk' | 'en') => {
    setCurrentLang(lang);
    i18n.changeLanguage(lang);
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
            <Router currentLang={currentLang} onPageChange={setCurrentPage} />
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
