import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from 'lucide-react';
import { translations } from '@/lib/translations';

interface FooterProps {
  currentLang: 'uk' | 'en';
  onPageChange: (page: string) => void;
}

const Footer = ({ currentLang, onPageChange }: FooterProps) => {
  const t = translations[currentLang];

  const productLinks = [
    { label: t.products.paperBags.title, page: 'products' },
    { label: t.products.laminatedBags.title, page: 'products' },
    { label: t.products.kraftBags.title, page: 'products' },
    { label: t.products.clutchBags.title, page: 'products' }
  ];

  const companyLinks = [
    { label: t.nav.about, page: 'about' },
    { label: t.nav.howWeWork, page: 'how-we-work' },
    { label: t.nav.blog, page: 'blog' },
    { label: t.nav.contact, page: 'contact' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold">PB</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PaperBag</h3>
                <p className="text-sm text-primary-foreground/80">{t.nav.tagline}</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6">
              {currentLang === 'uk'
                ? 'Ваш надійний партнер у виробництві якісної екологічної упаковки в Україні.'
                : 'Your reliable partner in manufacturing high-quality eco-friendly packaging in Ukraine.'}
            </p>
            
            {/* Social Links */}
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary-foreground/20 transition-smooth">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.nav.products}</h4>
            <ul className="space-y-3">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => onPageChange(link.page)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-semibold mb-6">
              {currentLang === 'uk' ? 'Компанія' : 'Company'}
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <button 
                    onClick={() => onPageChange(link.page)}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">{t.nav.contact}</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <div>
                  <a href="tel:+380674874902" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                    +38 067 487 4902
                  </a>
                  <p className="text-xs text-primary-foreground/60">
                    {currentLang === 'uk' ? 'Пн-Пт 9:00-18:00' : 'Mon-Fri 9:00-18:00'}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a href="mailto:info@paperbag.org.ua" className="text-primary-foreground/80 hover:text-primary-foreground transition-smooth">
                  info@paperbag.org.ua
                </a>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent mt-1" />
                <div>
                  <p className="text-primary-foreground/80">
                    {currentLang === 'uk' ? 'Україна' : 'Ukraine'}
                  </p>
                  <p className="text-xs text-primary-foreground/60">
                    {currentLang === 'uk' ? 'Доставка по всій країні' : 'Delivery nationwide'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 PaperBag. {currentLang === 'uk' ? 'Всі права захищені.' : 'All rights reserved.'}
          </p>
          
          <div className="flex gap-6 text-sm">
            <button className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
              {currentLang === 'uk' ? 'Політика конфіденційності' : 'Privacy Policy'}
            </button>
            <button className="text-primary-foreground/60 hover:text-primary-foreground transition-smooth">
              {currentLang === 'uk' ? 'Умови використання' : 'Terms of Service'}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;