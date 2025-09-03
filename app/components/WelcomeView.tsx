'use client';

import { MapPin, Shield, Phone, Settings } from 'lucide-react';
import { View } from '../page';
import { InfoCard } from './InfoCard';

interface WelcomeViewProps {
  onNavigate: (view: View) => void;
  location: string;
}

export function WelcomeView({ onNavigate, location }: WelcomeViewProps) {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-textPrimary">
          Know Your Rights Buddy
        </h1>
        <p className="text-textSecondary leading-7">
          Learn your rights in real-time by asking our AI assistant for the info you need, 
          when you need it.
        </p>
        
        <div className="flex items-center justify-center gap-2 text-sm text-textSecondary">
          <MapPin className="w-4 h-4" />
          <span>State: {location || 'Detecting...'}</span>
        </div>
      </div>

      {/* Main Action Cards */}
      <div className="grid gap-4">
        <InfoCard
          variant="rights"
          title="Know Your Rights"
          description="How lawyers and legal experts deal with encounters... location, rights, evidence & de-escalation"
          onClick={() => onNavigate('rights')}
          icon={<Shield className="w-6 h-6 text-primary" />}
        />
        
        <InfoCard
          variant="legalInfo"
          title="You have rights"
          description="Every person you interact with recognizes your rights under the constitution, and every law enforcement should respect your rights unless a lawful order is made"
          onClick={() => onNavigate('rights')}
          icon={<div className="w-6 h-6 bg-accent rounded-full flex items-center justify-center">
            <Shield className="w-3 h-3 text-white" />
          </div>}
        />
      </div>

      {/* Features Overview */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-textPrimary">
          State-specific recording
        </h2>
        
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center">
              <Shield className="w-5 h-5 text-textPrimary" />
            </div>
            <div>
              <h3 className="font-medium text-textPrimary">Expert Advice</h3>
              <p className="text-sm text-textSecondary">
                Get top advice from the best tax sources about their experience with law enforcement.
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-surface rounded-full flex items-center justify-center">
              <Phone className="w-5 h-5 text-textPrimary" />
            </div>
            <div>
              <h3 className="font-medium text-textPrimary">One Tap for Recording</h3>
              <p className="text-sm text-textSecondary">
                Turn on discreet mode and start recording the trip from the beginning. Begins the trip log and set tip level.
              </p>
              <div className="flex items-center gap-4 mt-2">
                <div className="flex items-center gap-1">
                  <Phone className="w-4 h-4 text-accent" />
                  <span className="text-sm text-accent">Go/actions is fast on mobile</span>
                </div>
                <div className="text-lg font-bold">48% <span className="text-sm text-textSecondary">$98,754 cases</span></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
