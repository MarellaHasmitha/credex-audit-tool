# System Architecture

---

# 1. Project Overview

This project is a full-stack SaaS Spend Optimizer built using:

- Next.js
- React
- TypeScript
- Tailwind CSS
- Supabase

The system helps users:

- Add SaaS tools
- Analyze spending
- Find cheaper alternatives
- Calculate savings
- Generate reports
- Share reports using unique URLs
- Capture user leads

---

# 2. High-Level Architecture

```txt
Frontend (Next.js UI)
        ↓
Business Logic Layer
        ↓
Backend APIs
        ↓
Supabase Database
```

---

# 3. Complete User Flow

```txt
Landing Page
↓
Audit Page
↓
User adds SaaS tools
↓
Audit Logic runs
↓
Summary API generates summary
↓
Audit saved in database
↓
Unique shareable URL created
↓
User views final report
↓
Lead form submission
↓
Lead saved in database
```

---

# 4. Frontend Architecture

## Landing Page

File:

```txt
app/page.tsx
```

Purpose:

- Product introduction
- Call-to-action button
- Navigate to audit page

Output:

```txt
Home → Audit
```

---

## Audit Page

File:

```txt
app/audit/page.tsx
```

Purpose:

- Collect user input
- Add tools
- Remove tools
- Run audit

Main function:

```txt
handleAudit()
```

Output:

- Audit analysis starts

---

## Shareable Result Page

File:

```txt
app/auditRes/[id]/page.tsx
```

Purpose:

- Read audit ID from URL
- Fetch audit from database
- Display audit report

Output:

Example:

```txt
/auditRes/123
```

---

# 5. Component Architecture

## ToolCard Component

File:

```txt
components/ToolCard.tsx
```

Purpose:

- Display added tools
- Remove single tool

Output:

```txt
Tool information card
```

---

## LeadForm Component

File:

```txt
components/LeadForm.tsx
```

Purpose:

Capture:

- Name
- Email
- Company
- Team size

Output:

Lead form submission

---

# 6. Business Logic Layer

File:

```txt
lib/audit.ts
```

Purpose:

Contains core recommendation engine.

Responsibilities:

### Detect duplicate tools

Example:

```txt
Slack + Discord → Communication tools
```

### Suggest cheaper alternatives

Example:

```txt
Gemini → ChatGPT
```

### Detect overpaying plans

Example:

```txt
Team plan for 2 users
```

### Calculate savings

Returns:

- Monthly savings
- Annual savings
- Recommendations

Output:

```txt
AuditResult[]
```

---

# 7. Data Layer

## Pricing Dataset

File:

```txt
data/pricing.ts
```

Purpose:

Stores static pricing information.

Example:

```txt
ChatGPT
Claude
Slack
Zoom
Adobe Express
```

Used by:

```txt
lib/audit.ts
```

---

# 8. Backend Architecture

---

## Summary API

File:

```txt
app/api/summary/route.ts
```

Method:

```txt
POST
```

Purpose:

Receives:

- tools
- audit results
- savings

Returns:

```json
{
  "summary": "..."
}
```

Output:

Summary shown on report page

---

## Audit Save API

File:

```txt
app/api/auditRes/route.ts
```

Method:

```txt
POST
```

Purpose:

Saves:

- Tools
- Results
- Savings
- Summary

Returns:

```txt
audit ID
```

Output:

```txt
/auditRes/{id}
```

---

## Leads API

File:

```txt
app/api/leads/route.ts
```

Method:

```txt
POST
```

Purpose:

Stores lead form data.

Output:

Lead saved successfully

---

# 9. Database Architecture

Uses:

Supabase

---

## Audits Table

Purpose:

Store audit reports.

Fields:

```txt
id
tools
results
total_monthly_savings
total_annual_savings
summary
created_at
```

Output:

Shareable reports

---

## Leads Table

Purpose:

Store user leads.

Fields:

```txt
id
name
email
company
team_size
created_at
```

Output:

Lead generation

---

# 10. Final Data Flow

```txt
User Input
↓
Frontend Form
↓
Audit Logic
↓
Summary API
↓
Save Audit API
↓
Supabase
↓
Shareable URL
↓
Lead Form
↓
Leads API
↓
Supabase
```

---

# 11. Evolution of Architecture

Version 1:

```txt
LocalStorage Result Page
```

Problem:

- Not shareable
- Only works in one browser

Version 2:

```txt
Supabase + Dynamic URLs
```

Benefits:

- Shareable
- Persistent
- Production-ready

---

# 12. Design Principles Used

- Separation of concerns
- Component reusability
- Backend API architecture
- Database persistence
- Product scalability
