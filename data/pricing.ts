"use client";
export const pricingData= [
  {
    name: "Canva",
    category: "design",
    plans: [
      { name: "free", pricePerUser: 0 },
      { name: "pro", pricePerUser: 15 },
      { name: "team", pricePerUser: 10 }
    ],
    alternatives: [
      { name: "Adobe Express", pricePerUser: 10 },
      { name: "VistaCreate", pricePerUser: 0 }
    ]
  },
  {
    name: "Slack",
    category: "communication",
    plans: [
      { name: "free", pricePerUser: 0 },
      { name: "pro", pricePerUser: 8.75 },
      { name: "business", pricePerUser: 18 }
    ],
    alternatives: [
      { name: "Microsoft Teams", pricePerUser: 6 },
      { name: "Discord", pricePerUser: 0 }
    ]
  },
  {
    name: "Notion",
    category: "productivity",
    plans: [
      { name: "free", pricePerUser: 0 },
      { name: "plus", pricePerUser: 10 },
      { name: "business", pricePerUser: 20 }
    ],
    alternatives: [
      { name: "Google Docs", pricePerUser: 0 },
      { name: "ClickUp", pricePerUser: 7 }
    ]
  },
  {
    name: "Grammarly",
    category: "writing",
    plans: [
      { name: "free", pricePerUser: 0 },
      { name: "pro", pricePerUser: 12 },
      { name: "business", pricePerUser: 15 }
    ],
    alternatives: [
      { name: "QuillBot", pricePerUser: 8 },
      { name: "LanguageTool", pricePerUser: 5 }
    ]
  },
  {
    name: "Figma",
    category: "design",
    plans: [
      { name: "free", pricePerUser: 0 },
      { name: "professional", pricePerUser: 16 },
      { name: "organization", pricePerUser: 55 }
    ],
    alternatives: [
      { name: "Penpot", pricePerUser: 0 },
      { name: "Lunacy", pricePerUser: 0 }
    ]
  },
  {
    name: "Zoom",
    category: "meetings",
    plans: [
      { name: "free", pricePerUser: 0 },
      { name: "pro", pricePerUser: 16.99 },
      { name: "business", pricePerUser: 21.99 }
    ],
    alternatives: [
      { name: "Google Meet", pricePerUser: 6 },
      { name: "Microsoft Teams", pricePerUser: 6 }
    ]
  },
  {
    name: "Asana",
    category: "project-management",
    plans: [
      { name: "free", pricePerUser: 0 },
      { name: "starter", pricePerUser: 13.49 },
      { name: "advanced", pricePerUser: 30.49 }
    ],
    alternatives: [
      { name: "Trello", pricePerUser: 5 },
      { name: "ClickUp", pricePerUser: 7 }
    ]
  },
  {
    name: "Trello",
    category: "project-management",
    plans: [
      { name: "free", pricePerUser: 0 },
      { name: "standard", pricePerUser: 5 },
      { name: "premium", pricePerUser: 10 }
    ],
    alternatives: [
      { name: "Notion", pricePerUser: 0 },
      { name: "ClickUp", pricePerUser: 7 }
    ]
  },
  {
    name: "Dropbox",
    category: "storage",
    plans: [
      { name: "plus", pricePerUser: 11.99 },
      { name: "professional", pricePerUser: 19.99 },
      { name: "business", pricePerUser: 20 }
    ],
    alternatives: [
      { name: "Google Drive", pricePerUser: 6 },
      { name: "OneDrive", pricePerUser: 6 }
    ]
  },
  {
    name: "Calendly",
    category: "scheduling",
    plans: [
      { name: "free", pricePerUser: 0 },
      { name: "standard", pricePerUser: 12 },
      { name: "teams", pricePerUser: 20 }
    ],
    alternatives: [
      { name: "Google Calendar", pricePerUser: 0 },
      { name: "Cal.com", pricePerUser: 0 }
    ]
  },

  {
  name: "ChatGPT",
  category: "ai",
  plans: [
    { name: "free", pricePerUser: 0 },
    { name: "plus", pricePerUser: 20 },
    { name: "business", pricePerUser: 25 }
  ],
  alternatives: [
    { name: "Claude", pricePerUser: 20 },
    { name: "Gemini", pricePerUser: 19.99 }
  ]
},
{
  name: "Claude",
  category: "ai",
  plans: [
    { name: "free", pricePerUser: 0 },
    { name: "pro", pricePerUser: 20 },
    { name: "team", pricePerUser: 25 }
  ],
  alternatives: [
    { name: "ChatGPT", pricePerUser: 20 },
    { name: "Gemini", pricePerUser: 19.99 }
  ]
},
{
  name: "Gemini",
  category: "ai",
  plans: [
    { name: "free", pricePerUser: 0 },
    { name: "ai pro", pricePerUser: 19.99 },
    { name: "ai ultra", pricePerUser: 249.99 }
  ],
  alternatives: [
    { name: "ChatGPT", pricePerUser: 20 },
    { name: "Claude", pricePerUser: 20 }
  ]
}
];