export type Tool = {
  toolName: string;
  cost: string;
  plan: string;
  seats: string;
  useCase: string;
};

export function getAuditRecommendation(tool: Tool) {
  const cost = Number(tool.cost);
  const seats = Number(tool.seats);

  if (cost > 5000 || seats > 50) {
    return "High Review Needed";
  }

  if (cost > 1000 || seats > 10) {
    return "Medium Review Needed";
  }

  return "Low Review Needed";
}


export function hasDuplicateUseCase(
    currentTool:Tool,
    allTools:Tool[]
){
    const matchedTools =allTools.filter(
        (tool)=>
            tool.useCase.toLowerCase() ===
        currentTool.useCase.toLowerCase()
    );
    return matchedTools.length>1;
}