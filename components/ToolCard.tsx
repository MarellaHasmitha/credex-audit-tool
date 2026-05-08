type Tool = {
  toolName: string;
  cost: string;
  plan: string;
  seats: string;
  useCase: string;
};

type ToolCardProps = {
  tool: Tool;
  onRemove: () => void;
};

export default function ToolCard({
  tool,
  onRemove
}: ToolCardProps) {

  return (
    <div className="border p-3 rounded m-3 w-full bg-white shadow hover:shadow-lg transition ">

      <p>Tool Name: {tool.toolName}</p>

      <p>Cost: {tool.cost}</p>

      <p>Plan: {tool.plan}</p>

      <p>Seats: {tool.seats}</p>

      <p>Use Case: {tool.useCase}</p>

      <button
        onClick={onRemove}
        className="mt-2 bg-red-400 rounded px-3 py-1 text-white shadow cursor-pointer hover:bg-red-600 font-bold"
      >
        Remove
      </button>

    </div>
  );
}