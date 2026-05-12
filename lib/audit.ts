import { pricingData} from "../data/pricing";

export type AddedTool = {
  toolName: string;
  plan: string;
  seats: string;
  cost: string;
  useCase: string;
};

export type AuditResult = {
  toolName: string;
  currentPlan: string;
  currentCost: number;
  alternativeTool: string;
  alternativePlan: string;
  alternativeCost: number;
  savings: number;
  message: string;
};

//plan Groups
const individualPlans = [
  "free",
  "plus",
  "pro",
  "starter",
  "standard",
  "professional",
  "unlimited",
  "premium",
  "ai pro"
];

const businessPlans = [
  "team",
  "teams",
  "business",
  "bussiness basic",
  "organization",
  "advanced",
  "enterprise",
  "ai ultra"
];

function isFreeTool(cost: string) {
  return Number(cost) === 0;
}

function getPlanGroup(seats: number) {
  if (seats < 5) {
    return individualPlans;
  }

  return businessPlans;
}

//check if more than one tool for same purpose
export function hasDuplicateUseCase(
  currentTool: AddedTool,
  allTools: AddedTool[]
) {
  const matchedTools = allTools.filter(
    (tool) =>
      tool.useCase.toLowerCase() ===
      currentTool.useCase.toLowerCase()
  );

  return matchedTools.length > 1;
}

//find alternative tools with same usecase
function findAlternatives(currentTool: AddedTool) {
  
  const alternatives = pricingData.filter(
    (tool) =>
      tool.category.toLowerCase() ===
        currentTool.useCase.toLowerCase() &&
      tool.name.toLowerCase() !==
        currentTool.toolName.toLowerCase()
  );

  return alternatives;
}
//find plan suitable for same usecases based on seats
type Plan = {
  name: string;
  price: number;
  billingType: BillingType;
};

function getSuitablePlan(
  plans: Plan[],
  seats: number
) {
  const planGroup = getPlanGroup(seats);

  const suitablePlans = plans.filter((plan) =>
    planGroup.some((groupPlan) =>
      plan.name.toLowerCase().includes(groupPlan)
    )
  );

  const paidPlans = suitablePlans.filter(
    (plan) => plan.price > 0
  );

  return paidPlans.sort(
    (a, b) => a.price - b.price
  )[0];
}
//calculate alternative cost
type BillingType = "free" | "per-user" | "flat";

function getComparableCost(
  price: number,
  seats: number,
  billingType: BillingType
) {
  if (billingType === "free") {
    return 0;
  }

  if (billingType === "flat") {
    return price;
  }

  return price * seats;
}

//calculate best alternative tool based on prices
function getBestAlternative(
  currentTool: AddedTool,
  currentCost: number
) {
  const seats = Number(currentTool.seats);

  const alternatives = findAlternatives(currentTool);

  const possibleAlternatives = alternatives
    .map((tool) => {
      const plan = getSuitablePlan(tool.plans as Plan[], seats);

      if (!plan) {
        return null;
      }

      const alternativeCost = getComparableCost(
        plan.price,
        seats,
        plan.billingType
      );

      return {
        alternativeTool: tool.name,
        alternativePlan: plan.name,
        alternativeCost,
        savings: currentCost - alternativeCost,
      };
    })
    .filter((item) => item !== null)
    .filter((item) => item.savings > 0);

  possibleAlternatives.sort(
    (a, b) => b.savings - a.savings
  );

  return possibleAlternatives[0];
}

//apply audit for single tool
function auditSingleTool(
  currentTool: AddedTool,
  allTools: AddedTool[]
): AuditResult {
  const currentCost = Number(currentTool.cost);

  if (isFreeTool(currentTool.cost)) {
    return {
      toolName: currentTool.toolName,
      currentPlan: currentTool.plan,
      currentCost,
      alternativeTool: "",
      alternativePlan: "",
      alternativeCost: 0,
      savings: 0,
      message: "Already using a free tool. No cost-saving alternative needed.",
    };
  }

  const duplicateUseCase = hasDuplicateUseCase(
    currentTool,
    allTools
  );

  const bestAlternative = getBestAlternative(
    currentTool,
    currentCost
  );

  if (!bestAlternative) {
    return {
      toolName: currentTool.toolName,
      currentPlan: currentTool.plan,
      currentCost,
      alternativeTool: "",
      alternativePlan: "",
      alternativeCost: 0,
      savings: 0,
      message: duplicateUseCase
        ? "You may be using multiple tools for the same purpose"
        : "Already optimized. No cheaper alternative found.",
    };
  }

  return {
    toolName: currentTool.toolName,
    currentPlan: currentTool.plan,
    currentCost,
    alternativeTool: bestAlternative.alternativeTool,
    alternativePlan: bestAlternative.alternativePlan,
    alternativeCost: bestAlternative.alternativeCost,
    savings: bestAlternative.savings,
    message: duplicateUseCase
      ? "You may be using multiple tools for the same purpose. Consider using one cheaper alternative tool for a purpose."
      :  "Cheaper alternative found.",
  };
}

//Audit all tools of user
export function auditAllTools(tools: AddedTool[]) {
  const results = tools.map((tool) =>
    auditSingleTool(tool, tools)
  );

  const totalMonthlySavings = results.reduce(
    (total, result) => total + result.savings,
    0
  );

  const totalAnnualSavings = totalMonthlySavings * 12;

  return {
    results,
    totalMonthlySavings,
    totalAnnualSavings,
    finalMessage:
      totalMonthlySavings > 0
        ? `You can save $${totalMonthlySavings.toFixed(
            2
          )} per month and $${totalAnnualSavings.toFixed(
            2
          )} per year by switching to better alternatives.`
        : "Your current tools are already optimized.",
  };
}