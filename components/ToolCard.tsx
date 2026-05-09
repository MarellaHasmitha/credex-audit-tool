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
    <div className="w-full max-w-lg min-h-[220px]border p-3 rounded m-3  bg-white shadow hover:shadow-lg transition ">

      <p>Tool Name: {tool.toolName}</p>

      <p>Cost: {tool.cost}</p>

      <p>Plan: {tool.plan}</p>

      <p>Seats: {tool.seats}</p>

      <p className="wrap-break-word">Use Case: {tool.useCase}</p>

      <button
        onClick={onRemove}
        className="mt-2 bg-red-500 rounded px-3 py-1 text-white shadow cursor-pointer hover:bg-red-700 font-bold"
      >
        Remove
      </button>

    </div>
  );
}