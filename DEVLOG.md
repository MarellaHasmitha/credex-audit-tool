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