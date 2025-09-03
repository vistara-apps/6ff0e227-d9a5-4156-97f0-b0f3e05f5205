'use client';

import { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

interface InfoCardProps {
  variant: 'rights' | 'script' | 'legalInfo';
  title: string;
  description: string;
  actionText?: string;
  onClick?: () => void;
  icon?: ReactNode;
}

export function InfoCard({ 
  variant, 
  title, 
  description, 
  actionText, 
  onClick, 
  icon 
}: InfoCardProps) {
  const baseClasses = "info-card transition-all duration-base cursor-pointer hover:shadow-modal";
  
  const variantClasses = {
    rights: "hover:border-primary/30 hover:bg-primary/5",
    script: "hover:border-accent/30 hover:bg-accent/5", 
    legalInfo: "hover:border-accent/30 hover:bg-accent/5"
  };

  return (
    <div 
      className={`${baseClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      <div className="flex items-start gap-4">
        {icon && (
          <div className="flex-shrink-0 mt-1">
            {icon}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-textPrimary mb-2">{title}</h3>
          <p className="text-textSecondary leading-6">{description}</p>
          
          {actionText && (
            <div className="flex items-center gap-2 mt-3 text-primary text-sm font-medium">
              <span>{actionText}</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
