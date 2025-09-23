import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  currentLang: 'uk' | 'en';
  onLanguageChange: (lang: 'uk' | 'en') => void;
}

const LanguageSwitcher = ({ currentLang, onLanguageChange }: LanguageSwitcherProps) => {
  return (
    <div className="flex items-center gap-1">
      <Globe className="w-4 h-4 text-muted-foreground" />
      <Button
        variant={currentLang === 'uk' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('uk')}
        className="lang-switch text-sm font-medium px-2 py-1"
      >
        УКР
      </Button>
      <Button
        variant={currentLang === 'en' ? 'default' : 'ghost'}
        size="sm"
        onClick={() => onLanguageChange('en')}
        className="lang-switch text-sm font-medium px-2 py-1"
      >
        ENG
      </Button>
    </div>
  );
};

export default LanguageSwitcher;