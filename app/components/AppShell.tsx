'use client';

import { ReactNode } from 'react';
import { Shield, Settings, Phone } from 'lucide-react';
import { View } from '../page';

interface AppShellProps {
  children: ReactNode;
  currentView: View;
  onNavigate: (view: View) => void;
}

export function AppShell({ children, currentView, onNavigate }: AppShellProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="glass border-b px-4 py-3">
        <div className="max-w-md mx-auto flex items-center justify-between">
          <div 
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => onNavigate('welcome')}
          >
            <Shield className="w-6 h-6 text-accent" />
            <h1 className="text-lg font-semibold text-textPrimary">KnowYourRights</h1>
          </div>
          
          <div className="flex items-center gap-2">
            <button
              onClick={() => onNavigate('settings')}
              className={`p-2 rounded-md transition-colors ${
                currentView === 'settings' 
                  ? 'bg-primary text-white' 
                  : 'text-textSecondary hover:text-textPrimary hover:bg-surface/10'
              }`}
            >
              <Settings className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-4 py-6">
        <div className="max-w-md mx-auto">
          {children}
        </div>
      </main>

      {/* Quick Actions Footer */}
      {currentView !== 'recording' && (
        <footer className="glass border-t px-4 py-3">
          <div className="max-w-md mx-auto flex gap-3">
            <button
              onClick={() => onNavigate('rights')}
              className="flex-1 btn-secondary py-3 px-4 rounded-lg font-medium"
            >
              View My Rights
            </button>
            <button
              onClick={() => onNavigate('recording')}
              className="btn-destructive py-3 px-4 rounded-lg font-medium flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Emergency
            </button>
          </div>
        </footer>
      )}
    </div>
  );
}
