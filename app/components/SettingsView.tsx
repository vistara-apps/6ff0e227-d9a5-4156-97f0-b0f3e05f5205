'use client';

import { useState } from 'react';
import { ArrowLeft, Plus, Trash2, User } from 'lucide-react';
import { View } from '../page';
import { ContactSelector } from './ContactSelector';

interface Contact {
  id: string;
  name: string;
  phoneNumber: string;
  customMessage?: string;
}

interface SettingsViewProps {
  onNavigate: (view: View) => void;
}

export function SettingsView({ onNavigate }: SettingsViewProps) {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: '1',
      name: 'Emergency Contact',
      phoneNumber: '+1 (555) 123-4567',
      customMessage: 'I may need help - check my location'
    }
  ]);
  const [showAddContact, setShowAddContact] = useState(false);

  const addContact = (contact: Omit<Contact, 'id'>) => {
    const newContact = {
      ...contact,
      id: Date.now().toString()
    };
    setContacts([...contacts, newContact]);
    setShowAddContact(false);
  };

  const removeContact = (id: string) => {
    setContacts(contacts.filter(c => c.id !== id));
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
        <h1 className="text-xl font-semibold text-textPrimary">Settings</h1>
      </div>

      {/* Emergency Contacts */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-textPrimary">Emergency Contacts</h2>
          <button
            onClick={() => setShowAddContact(true)}
            className="btn-primary py-2 px-4 rounded-lg flex items-center gap-2"
          >
            <Plus className="w-4 h-4" />
            Add
          </button>
        </div>

        {/* Contact List */}
        <div className="space-y-3">
          {contacts.map((contact) => (
            <div key={contact.id} className="glass p-4 rounded-lg">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-accent/20 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-medium text-textPrimary">{contact.name}</h3>
                    <p className="text-sm text-textSecondary">{contact.phoneNumber}</p>
                    {contact.customMessage && (
                      <p className="text-xs text-textSecondary mt-1">{contact.customMessage}</p>
                    )}
                  </div>
                </div>
                <button
                  onClick={() => removeContact(contact.id)}
                  className="text-destructive hover:bg-destructive/10 p-2 rounded-lg transition-colors"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}

          {contacts.length === 0 && (
            <div className="text-center py-8 text-textSecondary">
              <User className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>No emergency contacts added yet.</p>
              <p className="text-sm">Add contacts to receive alerts during recording.</p>
            </div>
          )}
        </div>
      </div>

      {/* Add Contact Modal */}
      {showAddContact && (
        <ContactSelector
          variant="add"
          onAddContact={addContact}
          onCancel={() => setShowAddContact(false)}
        />
      )}

      {/* Other Settings */}
      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-textPrimary">Preferences</h2>
        
        <div className="glass p-4 rounded-lg space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-textPrimary">Auto-location</h3>
              <p className="text-sm text-textSecondary">Automatically detect your state for relevant laws</p>
            </div>
            <button className="btn-primary py-1 px-3 rounded text-sm">
              Enabled
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-textPrimary">Default Language</h3>
              <p className="text-sm text-textSecondary">Choose your preferred language</p>
            </div>
            <button className="btn-secondary py-1 px-3 rounded text-sm">
              English
            </button>
          </div>

          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-medium text-textPrimary">Notifications</h3>
              <p className="text-sm text-textSecondary">Receive updates and alerts</p>
            </div>
            <button className="btn-primary py-1 px-3 rounded text-sm">
              On
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
