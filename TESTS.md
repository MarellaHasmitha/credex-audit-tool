# Test Cases

---

# AI Category Test Cases

## 1. ChatGPT Plus, 2 seats

### Input

```txt
Tool: ChatGPT
Plan: plus
Seats: 2
Cost: 40
```

### Expected

```txt
Alternative: Gemini ai pro
Alternative cost: 39.98
Savings: 0.02
```

---

## 2. Gemini AI Ultra, 2 seats

### Input

```txt
Tool: Gemini
Plan: ai ultra
Seats: 2
Cost: 249.99
```

### Expected

```txt
Alternative: Claude pro or ChatGPT plus
Alternative cost: 40
Savings: 209.99

Message:
Small team, individual plan may be enough
```

---

## 3. Gemini AI Ultra, 8 seats

### Input

```txt
Tool: Gemini
Plan: ai ultra
Seats: 8
Cost: 249.99
```

### Expected

```txt
Alternative: ChatGPT business or Claude team
Alternative cost: 200
Savings: 49.99
```

---

## 4. Claude Free, 3 seats

### Input

```txt
Tool: Claude
Plan: free
Seats: 3
Cost: 0
```

### Expected

```txt
No alternative
Savings: 0

Message:
Already using a free tool
```

---

# Design Category Test Cases

## 5. Adobe Express Premium, 2 seats

### Input

```txt
Tool: Adobe Express
Plan: premium
Seats: 2
Cost: 20
```

### Expected

```txt
No cheaper paid alternative
Savings: 0

Message:
Already optimized
```

Reason:

```txt
Canva Pro = 15 × 2 = 30
```

---

## 6. Canva Pro, 3 seats

### Input

```txt
Tool: Canva
Plan: pro
Seats: 3
Cost: 45
```

### Expected

```txt
Alternative: Adobe Express premium
Alternative cost: 30
Savings: 15
```

---

## 7. Canva Team, 3 seats

### Input

```txt
Tool: Canva
Plan: team
Seats: 3
Cost: 30
```

### Expected

```txt
Alternative: Adobe Express premium
Alternative cost: 30
Savings: 0

Message:
Already optimized
```

---

# Communication Category Test Cases

## 8. Slack Pro, 3 seats

### Input

```txt
Tool: Slack
Plan: pro
Seats: 3
Cost: 26.25
```

### Expected

```txt
No cheaper paid alternative
Savings: 0

Message:
Already optimized
```

---

## 9. Slack Business, 8 seats

### Input

```txt
Tool: Slack
Plan: business
Seats: 8
Cost: 144
```

### Expected

```txt
Alternative: Microsoft Teams business basic
Alternative cost: 48
Savings: 96
```

---

## 10. Discord Free, 5 seats

### Input

```txt
Tool: Discord
Plan: free
Seats: 5
Cost: 0
```

### Expected

```txt
No alternative

Message:
Already using a free tool
```

---

# Productivity Category Test Cases

## 11. Notion Business, 6 seats

### Input

```txt
Tool: Notion
Plan: business
Seats: 6
Cost: 120
```

### Expected

```txt
No cheaper business alternative found

Message:
Already optimized
```

Reason:

```txt
ClickUp unlimited is treated as individual plan
```

---

## 12. Notion Plus, 3 seats

### Input

```txt
Tool: Notion
Plan: plus
Seats: 3
Cost: 30
```

### Expected

```txt
Alternative: ClickUp unlimited
Alternative cost: 21
Savings: 9
```

---

## 13. Google Docs Free, 4 seats

### Input

```txt
Tool: Google Docs
Plan: free
Seats: 4
Cost: 0
```

### Expected

```txt
Already using a free tool
Savings: 0
```

---

# Duplicate Use Case Test

## 14. Multiple AI Tools

### Input

```txt
ChatGPT plus, 2 seats
Claude pro, 2 seats
Gemini ai pro, 2 seats
```

### Expected

```txt
Message includes:

You may be using multiple tools for the same purpose
```

---

# Mixed Full Audit Test

## 15. Full Stack Audit

### Input

```txt
Gemini ai ultra, 2 seats
Slack business, 8 seats
Canva pro, 3 seats
Notion plus, 3 seats
Claude free, 2 seats
```

### Expected

```txt
Gemini savings: 209.99
Slack savings: 96
Canva savings: 15
Notion savings: 9
Claude savings: 0

Total savings: 329.99
```

---

# Same Tool Duplicate Test

## 16. Same Tool Added Twice

### Input

```txt
ChatGPT
Plan: plus
Seats: 2
Cost: 40

ChatGPT
Plan: plus
Seats: 2
Cost: 40
```

### Expected

```txt
Alternative tool should NOT be ChatGPT

Can suggest:

Gemini ai pro
Claude pro
```

---

# Mixed Category Isolation Tests

## 17. Test A

### Input

```txt
Canva
Plan: pro
Seats: 3
Cost: 45

Slack
Plan: business
Seats: 8
Cost: 144

Notion
Plan: plus
Seats: 3
Cost: 30
```

### Expected

```txt
Canva → Adobe Express
Slack → Microsoft Teams
Notion → ClickUp
```

---

## 18. Test B

### Input

```txt
Claude
Plan: pro
Seats: 2
Cost: 40

Slack
Plan: pro
Seats: 3
Cost: 26.25

Adobe Express
Plan: premium
Seats: 2
Cost: 20
```

### Expected

```txt
Claude compares only with AI tools
Slack compares only with communication tools
Adobe Express compares only with design tools
```

Should NOT suggest:

```txt
Claude → Slack ❌
Slack → Canva ❌
Adobe Express → ChatGPT ❌
```

---

## 19. Test C

### Input

```txt
Gemini
Plan: ai ultra
Seats: 1
Cost: 249.99

Canva
Plan: team
Seats: 3
Cost: 30

Google Docs
Plan: free
Seats: 4
Cost: 0
```

### Expected

```txt
Gemini → ChatGPT or Claude
Canva → Already optimized or Adobe Express
Google Docs → Free tool message
```

---

# Final Validation Checklist

## Functional Tests

```txt
✓ Add Tool
✓ Remove Tool
✓ Remove All Tools
✓ Search Tools
✓ Filter Tools
✓ Audit Results
✓ Monthly Savings
✓ Annual Savings
✓ Summary Generation
✓ Shareable Audit URL
✓ Lead Form Submission
✓ Supabase Database Save
```