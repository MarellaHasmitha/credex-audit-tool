# Reflection

## What I Built

I built Credex, a SaaS Audit Tool that helps users analyze software subscriptions, identify overspending, and discover cost-effective alternatives.

Core features implemented:

- Add SaaS tools with plan, cost, seats, and use case
- Validation for invalid inputs
- Audit engine to detect overspending
- Alternative tool recommendations
- Monthly and annual savings calculation
- Search and filtering
- Persistent storage using :superbase
- Shareable audit result URLs
- Live deployment using : vercel
---

## Challenges I Faced

Some of the main challenges were:

- Designing business rules for plan comparisons
- Matching team plans vs individual plans correctly
- Handling database sync with local state
- Making shareable URLs work after refresh
- Managing TypeScript types across components

---

## What I Learned

Through this project, I learned:

- Building full-stack apps with Next.js and Supabase
- State management in React using hooks (useState,useEffect)
- Writing reusable business logic
- Working with APIs and databases
- Deploying production apps

---

## What I Would Improve Next

Given more time, I would add:

- Real-time SaaS pricing APIs
- Better analytics dashboard
- Export to PDF/CSV
- User authentication
- Advanced cost comparison insights


## 5. How I Planned and Built This Project in 7 Days

To make the project manageable and ensure steady progress, I divided the development into 7 focused days.

### Day 1 — Project Setup and UI Foundation

Built:

- Initialized the project using :contentReference[oaicite:0]{index=0}
- Set up folder structure
- Created landing page
- Added reusable UI components
- Connected project to :contentReference[oaicite:1]{index=1}

Learned:

- Project structure
- Component-based development
- Basic styling with Tailwind CSS

---

### Day 2 — Dynamic Tool Form

Built:

- Tool input form
- Add and remove tool functionality
- State management using React hooks

Learned:

- `useState`
- Props
- Dynamic rendering

---

### Day 3 — Search and Filtering

Built:

- Search tools by name
- Filter tools dynamically

Learned:

- Array methods (`filter`, `map`)
- Search logic

---

### Day 4 — Audit Business Logic

Built:

- Core audit engine
- Cost comparison logic
- Plan comparison logic
- Savings calculation

Learned:

- Business logic design
- Functions and conditional logic

---

### Day 5 & 6 Backend and Database Integration ,API Routes and Shareable Results

Built:

- Connected project to :contentReference[oaicite:2]{index=2}
- Save tools in database
- Delete single and multiple tools
- API routes using Next.js
- Dynamic result pages
- Shareable audit URLs

Learned:

- Database CRUD operations
- Async operations
- Server-side logic
- Dynamic routing
- Data fetching


---

### Day 7 — Testing, Deployment, and Documentation

Built:

- Final UI improvements
- Full testing of edge cases
- Deployment on :contentReference[oaicite:3]{index=3}
- Created README, DEVLOG, and Reflection documents

Learned:

- Production testing
- Deployment workflow
- Project documentation