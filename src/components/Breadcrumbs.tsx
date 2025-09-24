import { ChevronRight, Home } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface BreadcrumbItem {
  label: string;
  href?: string;
  onClick?: () => void;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  onNavigate?: (page: string) => void;
}

const Breadcrumbs = ({ items, onNavigate }: BreadcrumbsProps) => {
  const { t } = useTranslation();

  return (
    <nav className="flex items-center space-x-2 text-sm text-muted-foreground py-4">
      <button
        onClick={() => onNavigate?.('home')}
        className="flex items-center hover:text-primary transition-colors"
      >
        <Home className="w-4 h-4 mr-1" />
        {t('nav.home')}
      </button>
      
      {items.map((item, index) => (
        <div key={index} className="flex items-center">
          <ChevronRight className="w-4 h-4 mx-2" />
          {item.onClick ? (
            <button
              onClick={item.onClick}
              className="hover:text-primary transition-colors"
            >
              {item.label}
            </button>
          ) : (
            <span className={index === items.length - 1 ? 'text-foreground font-medium' : ''}>
              {item.label}
            </span>
          )}
        </div>
      ))}
    </nav>
  );
};

export default Breadcrumbs;