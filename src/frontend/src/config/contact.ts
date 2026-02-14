// Single source of truth for site contact details
export const CONTACT = {
  phone: {
    display: '+91 9138199931',
    tel: '+919138199931',
  },
  email: 'sahil13tanwar@gmail.com',
  location: {
    display: 'HUDA Sector 29, Plot No 551, Part -2, Panipat, Haryana',
    mapsUrl: 'https://www.google.com/maps/search/?api=1&query=HUDA+Sector+29%2C+Plot+No+551%2C+Part+-2%2C+Panipat%2C+Haryana',
    directionsUrl: 'https://www.google.com/maps/dir/?api=1&destination=HUDA+Sector+29%2C+Plot+No+551%2C+Part+-2%2C+Panipat%2C+Haryana',
  },
  whatsapp: {
    number: '919138199931', // International format without + for wa.me
    url: 'https://wa.me/919138199931',
  },
} as const;

/**
 * Build a WhatsApp URL with a prefilled message
 * @param message - The message to prefill in the WhatsApp chat
 * @returns Complete wa.me URL with encoded message
 */
export function buildWhatsAppUrl(message: string): string {
  const encodedMessage = encodeURIComponent(message);
  return `${CONTACT.whatsapp.url}?text=${encodedMessage}`;
}
