'use client';

import { useState } from 'react';
import { X, User } from 'lucide-react';

interface Contact {
  name: string;
  phoneNumber: string;
  customMessage?: string;
}

interface ContactSelectorProps {
  variant: 'add' | 'list';
  onAddContact?: (contact: Contact) => void;
  onCancel?: () => void;
}

export function ContactSelector({ variant, onAddContact, onCancel }: ContactSelectorProps) {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    customMessage: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phoneNumber && onAddContact) {
      onAddContact(formData);
      setFormData({ name: '', phoneNumber: '', customMessage: '' });
    }
  };

  if (variant === 'list') {
    return null; // This would show existing contacts
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="glass p-6 rounded-lg w-full max-w-md space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-semibold text-textPrimary">Add Emergency Contact</h2>
          <button
            onClick={onCancel}
            className="text-textSecondary hover:text-textPrimary"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-textPrimary mb-2">
              Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full p-3 bg-surface border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-textPrimary"
              placeholder="Contact name"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-textPrimary mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phoneNumber}
              onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
              className="w-full p-3 bg-surface border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-textPrimary"
              placeholder="+1 (555) 123-4567"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-textPrimary mb-2">
              Custom Alert Message (Optional)
            </label>
            <textarea
              value={formData.customMessage}
              onChange={(e) => setFormData({ ...formData, customMessage: e.target.value })}
              className="w-full p-3 bg-surface border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary text-textPrimary"
              placeholder="Custom message to send with alerts"
              rows={3}
            />
          </div>

          <div className="flex gap-3">
            <button
              type="button"
              onClick={onCancel}
              className="flex-1 btn-secondary py-3 rounded-lg"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex-1 btn-primary py-3 rounded-lg"
              disabled={!formData.name || !formData.phoneNumber}
            >
              Add Contact
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
