export interface ContactInfo {
  organization: string;
  emailPlaceholder: string;
  emailNote: string;
  location: string;
  socialLinks: {
    instagram?: string;
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
  inquiryTypes: string[];
}

export const contactData: ContactInfo = {
  organization: "Team7",
  emailPlaceholder: "connect@team7.co.in",
  emailNote: "Official contact address",
  location: "Lovely Professional University",
  socialLinks: {
    instagram: "https://www.instagram.com/team7_lpu/",
    linkedin: "https://www.linkedin.com/company/team7lpu/home/",
  },
  inquiryTypes: [
    "General Event Question",
    "Ticket & Pre-Registration",
    "Sponsorship & Partnership",
    "Club Collaboration / Speaker Inquiry"
  ]
};
