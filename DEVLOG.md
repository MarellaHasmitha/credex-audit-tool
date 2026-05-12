# Day 1

## What I Built
- Setup Next.js project
- Created reusable components
- Built landing page UI
- Added responsive layout
- Used props for reusable cards

## What I Learned
- Next.js basics
- React components
- Props
- Tailwind CSS basics
- Responsive layouts

## Problems Faced
- Understanding component hierarchy
- Tailwind syntax mistakes
- Flex vs grid confusion


##  Day 2 — Dynamic SaaS Audit Form

###  Goal
Build a dynamic form where users can add, view, and remove SaaS tools.

---

###  What I Learned

- React useState hook (deep understanding)
- Controlled components (inputs tied to state)
- Object state management in forms
- Handling arrays in state
- Using map() to render lists
- Using filter() to remove items
- Props in React (parent → child data flow)
- Component separation concept (ToolCard)
- Basic TypeScript typing for state and props
- Tailwind CSS styling for UI design

---

###  What I Built

- SaaS Audit Tool form with multiple inputs:
  - Tool Name
  - Cost
  - Plan
  - Seats
  - Use Case

- Dynamic functionality:
  - Add tool to list
  - Remove tool from list
  - Reset form after submission
  - Live count of tools

- Component:
  - ToolCard component created for reusable UI

---

###  Key Concepts Practiced

- State updates using spread operator
- Re-rendering based on state changes
- Passing data using props
- Event handling (onClick, onChange)

---

###  Final Output

- Fully working dynamic SaaS audit system
- Clean UI using Tailwind CSS
- Component-based structure
- Beginner-friendly but scalable architecture

---

###  Next Step (Day 3 Preview)

- Improve UI structure further
- Add calculations (total cost / summary)
- Add better form validation
- Start building dashboard-style insights



# Day 3

## Learned

* React state changes
* map() and filter()
* Search functionality
* Conditional rendering
* useEffect + localStorage
* JSON.stringify() and JSON.parse()

## Built

* Added tool cards
* Remove tool
* Clear all tools
* Filter Free / Paid tools
* Search tools
* Persist data after refresh
* No results UI

## Challenges

* Confused between tools vs filteredTools
* useEffect dependency confusion
* JSX ternary rendering issues

## Fixed

* Understood state updates
* Fixed localStorage save/load flow
* Combined filter + search correctly

# Day 4 — Dynamic Pricing Logic + Real Audit Form

## What I Built

Today I improved the audit form to behave more like a real SaaS audit product.

### 1. Tool Selection
- Replaced manual tool input with dynamic tool selection using pricing data.
- Connected selected tool with real tool database.

### 2. Dynamic Plan Selection
- Used `.find()` to get the selected tool from pricing data.
- Rendered plans dynamically based on selected tool.
- Example:
  - :contentReference[oaicite:0]{index=0} → Free, Pro, Team
  - :contentReference[oaicite:1]{index=1} ChatGPT → Free, Plus, Team

### 3. Auto Fill Logic
Implemented auto-fill system:

#### Use Case
- Automatically fills based on selected tool.
- Example:
  - Canva → Design
  - ChatGPT → AI Productivity

#### Cost
- Automatically calculated using:

cost = pricePerUser × seats

- Updates whenever:
  - plan changes
  - seats change

### 4. Form Validation Improvements
- Removed unnecessary global form error.
- Kept field-level validation only.
- Clears errors dynamically on valid selection.

### 5. React Concepts Learned
Today I practiced:

- `find()`
- `map()`
- controlled components
- `onChange`
- derived state
- object updates using spread operator
- dynamic dropdown rendering

## Problems Faced

- Confused between `filter()` and `find()`
- TypeScript property mismatch (`tool` vs `selectedTool`)
- Data field mismatch (`category` vs `useCase`)
- Handling derived values like cost

## How I Solved Them

- Used `find()` for single selected tool
- Used `selectedTool?.plans`
- Used optional chaining to avoid crashes
- Mapped pricing data fields into form state

## Next Plan

Tomorrow I will build:

- Real audit engine
- Alternative recommendations
- Savings calculation
- Tool comparison cards



## Day 5 — Audit Engine + Result Dashboard

### Completed

- Built core audit logic in `lib/audit.ts`
- Added free plan handling
- Added duplicate use-case detection
- Added seat-based plan grouping
- Added individual vs business plan comparison
- Added flat pricing vs per-user pricing logic
- Added best cheaper alternative recommendation
- Added savings calculation for each tool
- Added total savings calculation

### UI Work

- Created separate audit result page
- Added result cards for each tool
- Added status badges:
  - Savings Found
  - Free Tool
  - Optimized
- Added empty states
- Added loading state
- Added Back to Audit navigation
- Improved result page layout and card design

### Testing Done

- Single tool testing
- Duplicate tool testing
- Mixed category testing
- Free tool testing
- Business plan testing
- Edge case validation

### Learned

- Real-world SaaS pricing logic
- Business rule implementation
- TypeScript type handling
- Conditional rendering
- Route-based page separation

### Challenges

- TypeScript type errors
- Plan matching issues
- Null state handling
- Pricing comparison bugs

### Solutions

- Created shared types
- Improved plan matching logic
- Added loading + null checks
- Tested multiple edge cases


# Day 6 — Backend Integration + Product Features

## What I Built Today

### 1. AI Summary Backend API
Built:

app/api/summary/route.ts

Learned:
- Why backend APIs are needed
- Difference between GET and POST
- How frontend sends data using fetch()
- How backend receives data using request.json()
- How to return JSON response

Implemented:
- Audit data sent from frontend
- Backend generates fallback summary
- Summary returned to UI


### 2. Lead Capture System
Built:

components/LeadForm.tsx
app/api/leads/route.ts

Integrated with Supabase.

Features:
- User enters:
  - Name
  - Email
  - Company
  - Team Size
- Data stored in database

Learned:
- Form state using object
- Dynamic input handling
- Reusable form architecture
- POST request to backend
- Saving data in Supabase


### 3. Shareable Audit Results
Built:

app/api/auditRes/route.ts
app/auditRes/[id]/page.tsx

Features:
- Audit results saved in Supabase
- Unique audit ID generated
- Shareable URLs created

Example:

/auditRes/{id}

Learned:
- UUID identifiers
- Dynamic routing in Next.js
- Route params
- Fetching saved data from database using ID


### 4. Result Page Improvements
Added:
- Lead form on result page
- Back to Audit button
- Alternative tool fallback handling

Learned:
- Conditional rendering
- Cleaner component separation
- Production-style UX flow


## Problems I Faced Today

- Confusion between API routes and page routes
- 405 errors while testing POST routes
- Route conflicts in Next.js
- Params handling in dynamic routes
- Supabase import/export issues

How I solved them:
- Separated API folder and page folder correctly
- Fixed routing structure
- Corrected Supabase imports
- Used async params correctly


## What I Learned Today

- Backend architecture in Next.js
- POST request lifecycle
- Supabase database integration
- Lead generation product thinking
- Shareable links architecture
- Difference between localStorage and database storage


## Plan for Tomorrow

### Final Testing
Test:
- Add tool
- Remove tool
- Remove all tools
- Audit logic
- Summary generation
- Lead form submission
- Shareable URLs

### Deployment
- Push final code to GitHub
- Deploy on Vercel

### Documentation
Write:
- README.md
- Project architecture
- Features
- Setup instructions
- Screenshots