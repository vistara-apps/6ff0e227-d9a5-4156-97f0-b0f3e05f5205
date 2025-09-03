'use client';

import { Globe } from 'lucide-react';

interface LanguageSwitcherProps {
  language: 'en' | 'es';
  onLanguageChange: (language: 'en' | 'es') => void;
}

export function LanguageSwitcher({ language, onLanguageChange }: LanguageSwitcherProps) {
  return (
    <div className="flex items-center gap-2 bg-surface rounded-lg p-1">
      <button
        onClick={() => onLanguageChange('en')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          language === 'en' 
            ? 'bg-primary text-white' 
            : 'text-textSecondary hover:text-textPrimary'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => onLanguageChange('es')}
        className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
          language === 'es' 
            ? 'bg-primary text-white' 
            : 'text-textSecondary hover:text-textPrimary'
        }`}
      >
        ES
      </button>
      <Globe className="w-4 h-4 text-textSecondary ml-1" />
    </div>
  );
}
