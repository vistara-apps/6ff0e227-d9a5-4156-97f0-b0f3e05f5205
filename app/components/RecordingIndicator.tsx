'use client';

import { Circle } from 'lucide-react';

interface RecordingIndicatorProps {
  isActive: boolean;
}

export function RecordingIndicator({ isActive }: RecordingIndicatorProps) {
  if (!isActive) {
    return (
      <div className="w-24 h-24 bg-surface rounded-full flex items-center justify-center mx-auto">
        <Circle className="w-12 h-12 text-destructive" />
      </div>
    );
  }

  return (
    <div className="w-24 h-24 bg-destructive rounded-full flex items-center justify-center mx-auto recording-pulse">
      <div className="w-8 h-8 bg-white rounded-full"></div>
    </div>
  );
}
