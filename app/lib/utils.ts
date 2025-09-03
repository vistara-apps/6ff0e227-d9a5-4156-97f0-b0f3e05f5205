export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  const match = cleaned.match(/^(\d{1})(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return `+${match[1]} (${match[2]}) ${match[3]}-${match[4]}`;
  }
  return phone;
}

export function getLocationFromCoordinates(lat: number, lng: number): Promise<string> {
  // This would integrate with a geocoding service
  // For now, return a default state
  return Promise.resolve('California');
}

export function validatePhoneNumber(phone: string): boolean {
  const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
  return phoneRegex.test(phone);
}

export function generateAlertMessage(
  contactName: string, 
  location: string, 
  customMessage?: string
): string {
  const defaultMessage = `Emergency alert from KnowYourRights Buddy. I may need assistance. Current location: ${location}`;
  return customMessage || defaultMessage;
}
