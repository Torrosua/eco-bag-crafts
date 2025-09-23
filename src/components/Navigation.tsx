import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';
import LanguageSwitcher from './LanguageSwitcher';
import { translations } from '@/lib/translations';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  currentLang: 'uk' | 'en';
  onLanguageChange: (lang: 'uk' | 'en') => void;
}

const Navigation = ({ currentPage, onPageChange, currentLang, onLanguageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[currentLang];

  const navItems = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'products', label: t.nav.products },
    { id: 'how-we-work', label: t.nav.howWeWork },
    { id: 'blog', label: t.nav.blog },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (pageId: string) => {
    onPageChange(pageId);
    setIsOpen(false);
  };

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div 
            className="flex items-center gap-3 cursor-pointer" 
            onClick={() => handleNavClick('home')}
          >
            <div className="w-8 h-8 bg-gradient-kraft rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">PB</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-primary">PaperBag</h1>
              <p className="text-xs text-muted-foreground">{t.nav.tagline}</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant={currentPage === item.id ? 'default' : 'ghost'}
                onClick={() => handleNavClick(item.id)}
                className="transition-smooth"
              >
                {item.label}
              </Button>
            ))}
          </div>

          {/* Contact Info & Language Switcher */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1">
                <Phone className="w-4 h-4" />
                <span>+38 067 487 4902</span>
              </div>
            </div>
            <LanguageSwitcher 
              currentLang={currentLang} 
              onLanguageChange={onLanguageChange} 
            />
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden flex items-center gap-2">
            <LanguageSwitcher 
              currentLang={currentLang} 
              onLanguageChange={onLanguageChange} 
            />
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col gap-6 pt-6">
                  <div className="flex flex-col gap-4">
                    {navItems.map((item) => (
                      <Button
                        key={item.id}
                        variant={currentPage === item.id ? 'default' : 'ghost'}
                        onClick={() => handleNavClick(item.id)}
                        className="justify-start"
                      >
                        {item.label}
                      </Button>
                    ))}
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex flex-col gap-3 text-sm text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        <span>+38 067 487 4902</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>info@paperbag.org.ua</span>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;