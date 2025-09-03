'use client';

import { useState, useEffect } from 'react';
import { AppShell } from './components/AppShell';
import { RightsView } from './components/RightsView';
import { RecordingView } from './components/RecordingView';
import { SettingsView } from './components/SettingsView';
import { WelcomeView } from './components/WelcomeView';

export type View = 'welcome' | 'rights' | 'recording' | 'settings';

export default function Home() {
  const [currentView, setCurrentView] = useState<View>('welcome');
  const [userLocation, setUserLocation] = useState<string>('');

  useEffect(() => {
    // Get user location on load
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // For demo purposes, set to a default state
          setUserLocation('California');
        },
        () => {
          setUserLocation('General');
        }
      );
    }
  }, []);

  const renderView = () => {
    switch (currentView) {
      case 'welcome':
        return <WelcomeView onNavigate={setCurrentView} location={userLocation} />;
      case 'rights':
        return <RightsView onNavigate={setCurrentView} location={userLocation} />;
      case 'recording':
        return <RecordingView onNavigate={setCurrentView} />;
      case 'settings':
        return <SettingsView onNavigate={setCurrentView} />;
      default:
        return <WelcomeView onNavigate={setCurrentView} location={userLocation} />;
    }
  };

  return (
    <AppShell currentView={currentView} onNavigate={setCurrentView}>
      {renderView()}
    </AppShell>
  );
}
