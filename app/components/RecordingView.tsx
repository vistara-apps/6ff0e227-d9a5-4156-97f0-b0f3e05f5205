'use client';

import { useState, useEffect } from 'react';
import { ArrowLeft, Phone, Square, Circle } from 'lucide-react';
import { View } from '../page';
import { RecordingIndicator } from './RecordingIndicator';

interface RecordingViewProps {
  onNavigate: (view: View) => void;
}

export function RecordingView({ onNavigate }: RecordingViewProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [recordingTime, setRecordingTime] = useState(0);
  const [alertSent, setAlertSent] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isRecording) {
      interval = setInterval(() => {
        setRecordingTime((prev) => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRecording]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setAlertSent(true);
    // In a real app, this would start actual recording and send alerts
  };

  const handleStopRecording = () => {
    setIsRecording(false);
    setRecordingTime(0);
    // In a real app, this would save the recording
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onNavigate('welcome')}
          className="flex items-center gap-2 text-textSecondary hover:text-textPrimary transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
      </div>

      {/* Recording Status */}
      <div className="text-center space-y-4">
        <RecordingIndicator isActive={isRecording} />
        
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-textPrimary">
            {isRecording ? 'Recording Active' : 'Emergency Recording'}
          </h2>
          <p className="text-textSecondary">
            {isRecording 
              ? 'Recording in progress. Stay calm and follow your rights.'
              : 'Tap to start discreet recording and alert your contacts.'
            }
          </p>
        </div>

        {isRecording && (
          <div className="text-3xl font-mono text-accent">
            {formatTime(recordingTime)}
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        {!isRecording ? (
          <button
            onClick={handleStartRecording}
            className="w-full btn-destructive py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center gap-3"
          >
            <Circle className="w-6 h-6" />
            Start Recording & Alert
          </button>
        ) : (
          <button
            onClick={handleStopRecording}
            className="w-full bg-gray-600 hover:bg-gray-700 text-white py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center gap-3"
          >
            <Square className="w-6 h-6" />
            Stop Recording
          </button>
        )}
      </div>

      {/* Status Messages */}
      <div className="space-y-3">
        {alertSent && (
          <div className="glass p-4 rounded-lg border border-accent/20">
            <div className="flex items-center gap-2 text-accent">
              <Phone className="w-4 h-4" />
              <span className="font-medium">Alert Sent</span>
            </div>
            <p className="text-sm text-textSecondary mt-1">
              Your emergency contacts have been notified with your location.
            </p>
          </div>
        )}

        <div className="glass p-4 rounded-lg">
          <h3 className="font-semibold text-textPrimary mb-2">During Recording:</h3>
          <ul className="text-sm text-textSecondary space-y-1">
            <li>• Stay calm and speak clearly</li>
            <li>• State your name and the situation</li>
            <li>• Mention your location</li>
            <li>• Exercise your right to remain silent</li>
            <li>• Keep the phone steady if possible</li>
          </ul>
        </div>
      </div>

      {/* Quick Rights Reference */}
      <div className="glass p-4 rounded-lg">
        <h3 className="font-semibold text-textPrimary mb-2">Quick Reminders:</h3>
        <div className="text-sm text-textSecondary space-y-1">
          <p>"I am exercising my right to remain silent."</p>
          <p>"Am I free to go?"</p>
          <p>"I do not consent to any searches."</p>
        </div>
      </div>
    </div>
  );
}
