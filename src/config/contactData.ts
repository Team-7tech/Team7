export interface ContactInfo {
  organization: string;
  emailPlaceholder: string;
  emailNote: string;
  location: string;
  socialLinks: {
    github?: string;
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
  inquiryTypes: string[];
}

export const contactData: ContactInfo = {
  organization: "Team7",
  emailPlaceholder: "contact@team7.tech",
  emailNote: "Official contact address — update in src/config/contactData.ts",
  location: "Campus Student Activity Center",
  socialLinks: {
    github: "https://github.com",
    linkedin: "https://linkedin.com",
    instagram: "https://instagram.com",
    twitter: "https://twitter.com"
  },
  inquiryTypes: [
    "General Event Question",
    "Ticket & Pre-Registration",
    "Sponsorship & Partnership",
    "Club Collaboration / Speaker Inquiry"
  ]
};
