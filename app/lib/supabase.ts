import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseKey);

export interface User {
  userId: string;
  farcaster_fid?: string;
  savedContacts: Array<{
    name: string;
    phoneNumber: string;
    customMessage?: string;
  }>;
  preferredLanguage: string;
  notificationSettings: Record<string, any>;
}

export interface EncounterLog {
  logId: string;
  userId: string;
  timestamp: string;
  location: {
    latitude: number;
    longitude: number;
  };
  recordingUrl?: string;
  notes: string;
  scriptUsed: string;
}

export interface LegalInfoCache {
  state: string;
  rightsSummary: string;
  dosDonts: string;
  scriptsEn: string;
  scriptsEs: string;
}
