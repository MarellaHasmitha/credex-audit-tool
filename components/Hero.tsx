export default function Hero(){
  return (
    <div className="p-10 min-h-screen flex flex-col justify-center items-center bg-black text-white text-center">
        <h1 className="text-4xl font-bold md:text-6xl">
            Credix Audit Tool
        </h1>
        <p className="m-5 text-lg max-w-2xl">
            Optimize your AI SaaS spending
            with our comprehensive audit tool.
            Analyze usage, identify inefficiencies, 
            and maximize ROI with actionable insights. 
            Take control of your AI costs today!
        </p>
        <button className="bg-green-400 rounded px-3 py-1 text-white font-bold hover:bg-green-600 cursor-pointer">
            Start
        </button>
    </div>
  )
}