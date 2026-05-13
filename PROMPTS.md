# Prompt Design

## Overview

This project includes an audit summary generation system.

The summary logic is implemented in:

```txt
app/api/summary/route.ts
```

Currently the MVP uses fallback backend summary logic.

The architecture is designed to support future integration with real AI APIs.

---

# Main Prompt

If connected to a live AI model, the following prompt would be used:

```txt
Analyze this SaaS stack and generate a concise business audit summary.

Input:
- List of tools
- Current pricing
- Team size
- Recommended alternatives
- Monthly savings
- Annual savings

Instructions:

1. Identify overspending
2. Detect duplicate tools
3. Recommend cheaper alternatives
4. Mention possible savings
5. Keep tone professional and actionable
6. Output in under 120 words
```

---

# Example Input

```json
{
  "tools": [
    {
      "name": "Gemini",
      "plan": "ai ultra",
      "seats": 2,
      "cost": 249.99
    },
    {
      "name": "Slack",
      "plan": "business",
      "seats": 8,
      "cost": 144
    }
  ],
  "totalMonthlySavings": 305.99,
  "totalAnnualSavings": 3671.88
}
```

---

# Example Output

```txt
Your current SaaS stack shows optimization opportunities.

Gemini AI Ultra appears oversized for your current team size. A lower-cost AI plan may deliver similar value.

Slack Business may also be replaced with a lower-cost communication plan.

By switching tools and plans, your team may save approximately $305.99 monthly and $3671.88 annually.
```

---

# Current MVP Implementation

Currently the project uses:

```txt
Fallback backend summary logic
```

Reason:

- Avoid API cost during MVP development
- Faster testing
- Predictable outputs

---

# Future Improvements

Future versions may integrate:

- Open API
- Anthropic Claude API
- Google Gemini API

Possible improvements:

- Personalized business recommendations
- Industry-specific suggestions
- ROI analysis
- Procurement recommendations

---

# Prompt Design Goals

The prompt was designed to generate summaries that are:

- Business-focused
- Concise
- Actionable
- Easy for founders to understand