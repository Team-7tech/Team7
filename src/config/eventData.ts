export interface EventInfo {
  organization: string;
  name: string;
  type: string;
  tagline: string;
  quote: string;
  shortDescription: string;
  fullDescription: string;
  date: string;
  dateBadge: string;
  time: string;
  venue: string;
  venueBadge: string;
  ticketPrice: string;
  registrationStatus: 'COMING_SOON' | 'OPEN' | 'CLOSED';
  registrationStatusLabel: string;
  tracks: Array<{
    title: string;
    description: string;
    iconName: string;
  }>;
  highlights: Array<{
    label: string;
    value: string;
    detail: string;
  }>;
  faqs: Array<{
    id: string;
    category: string;
    question: string;
    answer: string;
  }>;
}

export const eventData: EventInfo = {
  organization: "Team7",
  name: "SYNTAX VERSE",
  type: "Technical Hackathon",
  tagline: "Where Ideas Compile Into Reality.",
  quote: "Where Ideas Compile Into Reality.",
  shortDescription: "A flagship technical hackathon where developers, designers, and thinkers assemble to solve high-impact challenges and engineer futuristic solutions.",
  fullDescription: "Syntax Verse is Team7's premier technical hackathon designed to bring together the brightest technical minds. Over an intense sprint, teams collaborate to transform raw concepts into functional, high-performance software and systems. Built for creators who think in logic and build without limits.",
  
  // Date & Venue are NOT finalized yet - using clean TBA placeholders per design spec
  date: "DATE — TO BE ANNOUNCED",
  dateBadge: "DATE TBA",
  time: "TIME — TO BE ANNOUNCED",
  venue: "VENUE — TO BE ANNOUNCED",
  venueBadge: "VENUE TBA",
  
  ticketPrice: "FREE ENTRY (REGISTRATION REQUIRED)",
  registrationStatus: "COMING_SOON",
  registrationStatusLabel: "PRE-REGISTRATION OPEN",

  tracks: [
    {
      title: "Core Software & Systems",
      description: "Low-level engineering, full-stack applications, scalable distributed architectures, and developer toolings.",
      iconName: "Cpu"
    },
    {
      title: "AI & Autonomous Systems",
      description: "Machine learning applications, neural workflows, intelligent agents, and automated decision platforms.",
      iconName: "Bot"
    },
    {
      title: "Open Innovation",
      description: "Unrestricted problem space. Build novel software solutions that tackle real-world friction and industry challenges.",
      iconName: "Sparkles"
    },
    {
      title: "Web & Cyber Infrastructure",
      description: "Modern web protocols, decentralized systems, security tools, and resilient network infrastructures.",
      iconName: "Globe"
    }
  ],

  highlights: [
    {
      label: "EVENT TYPE",
      value: "Technical Hackathon",
      detail: "Focused technical competition"
    },
    {
      label: "SCHEDULE",
      value: "DATE TBA",
      detail: "Official dates releasing soon"
    },
    {
      label: "LOCATION",
      value: "VENUE TBA",
      detail: "Campus & Virtual access"
    },
    {
      label: "ORGANIZER",
      value: "Team7",
      detail: "Student Technical Club"
    }
  ],

  faqs: [
    // Row 1 - General & Schedule
    {
      id: "faq-1",
      category: "SCHEDULE & DATES",
      question: "When will official event dates be announced?",
      answer: "The official dates and venue for Syntax Verse are currently being finalized by Team7. Pre-register now to lock in priority notifications and early ticket access as soon as dates are locked."
    },
    {
      id: "faq-2",
      category: "ELIGIBILITY",
      question: "Who is eligible to participate in Syntax Verse?",
      answer: "Syntax Verse is open to all university students, self-taught coders, experienced developers, and technical enthusiasts. Cross-disciplinary teams are strongly encouraged."
    },
    {
      id: "faq-3",
      category: "PRICING & ADMISSION",
      question: "Is there any registration or entry fee?",
      answer: "Pre-registration and participation entry passes are 100% free. Selected attendees will receive digital pass confirmation links directly to their registered email."
    },

    // Row 2 - Teams & Building
    {
      id: "faq-4",
      category: "TEAM DYNAMICS",
      question: "What is the allowed team size for hackathon projects?",
      answer: "Teams typically consist of 2 to 4 members. Solo participants can also pre-register and take part in our team-matching sessions before the official hackathon kickoff."
    },
    {
      id: "faq-5",
      category: "TECH STACK",
      question: "What programming languages or tools can we use?",
      answer: "You are free to build using any programming language, framework, API, or hardware stack unless a specific track problem statement imposes explicit tech constraints."
    },
    {
      id: "faq-6",
      category: "CODE ORIGINALITY",
      question: "Can we work on an existing codebase?",
      answer: "All project submission code must be written during the hackathon period. Using open-source libraries, public APIs, and framework boilers is fully permitted."
    },

    // Row 3 - Evaluation & Support
    {
      id: "faq-7",
      category: "TECHNICAL MENTORSHIP",
      question: "Will technical mentors be available during the sprint?",
      answer: "Yes! Domain architects and senior engineering mentors from Team7 will provide live technical guidance, code review, and architecture consulting throughout the sprint."
    },
    {
      id: "faq-8",
      category: "PROJECT EVALUATION",
      question: "How will hackathon projects be evaluated?",
      answer: "Projects will be judged on technical complexity, original problem solving, execution quality, UI/UX polish, and practical real-world impact."
    },
    {
      id: "faq-9",
      category: "SUBMISSIONS & RECOGNITION",
      question: "What do participants receive upon completion?",
      answer: "All verified participants receive verified digital certificates, project feedback from judges, track winner badges, and priority invitations to future Team7 initiatives."
    }
  ]
};
