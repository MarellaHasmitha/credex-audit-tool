# Pricing Dataset

## Overview

This project uses a static SaaS pricing dataset stored in:

```txt
data/pricing.ts
```

The dataset powers the audit recommendation engine.

It helps compare:

- Current tool pricing
- Alternative tools
- Team vs individual plans
- Potential savings

---

# Categories

The dataset currently contains 4 SaaS categories:

---

## 1. Design Tools

### Tools Included

```txt
Canva
Adobe Express
VistaCreate
```

### Purpose

Used for:

- Social media design
- Branding
- Marketing creatives

---

## 2. Communication Tools

### Tools Included

```txt
Slack
Microsoft Teams
Discord
```

### Purpose

Used for:

- Team communication
- Messaging
- Collaboration

---

## 3. Productivity Tools

### Tools Included

```txt
Notion
Google Docs
ClickUp
```

### Purpose

Used for:

- Documentation
- Task management
- Productivity workflows

---

## 4. AI Tools

### Tools Included

```txt
ChatGPT
Claude
Gemini
```

### Purpose

Used for:

- Content generation
- Coding help
- Research
- Productivity assistance

---

# Pricing Structure

Each tool contains:

```txt
Tool Name
Category
Plan Name
Price
Billing Type
```

---

# Billing Types

## Free

Example:

```txt
Discord Free
Google Docs Free
Claude Free
```

---

## Per User

Example:

```txt
ChatGPT Plus
Slack Pro
Notion Business
```

Formula:

```txt
Total Cost = Price × Seats
```

---

## Flat Pricing

Example:

```txt
Gemini AI Ultra
```

Formula:

```txt
Total Cost = Fixed Monthly Cost
```

---

# Why Static Dataset?

Static pricing was chosen for this MVP because:

- Easy to test
- Fast comparisons
- No dependency on third-party APIs
- Predictable audit results

---

# Future Improvements

Future versions may include:

- Live pricing APIs
- Regional pricing
- Enterprise pricing
- Discounts
- Annual billing calculations