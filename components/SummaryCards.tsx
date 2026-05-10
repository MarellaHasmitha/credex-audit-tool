type SummaryProps={
    totalTools:number;
    totalCost:number;
    totalSeats:number;
    enterpriseTools:number;
};

export default function SummaryCards(
    {
    totalTools,
     totalCost,
     totalSeats,
     enterpriseTools
    }:SummaryProps){
        return(
            
        <div className="grid grid-cols-2 gap-3 mb-5 w-full">

        <div className="bg-white shadow rounded p-3 text-center">
            <p>Total Tools</p>
            <h2 className="font-bold text-xl">{totalTools}</h2>
        </div>

        <div className="bg-white shadow rounded p-3 text-center">
            <p>Total Cost</p>
            <h2 className="font-bold text-xl">₹{totalCost}</h2>
        </div>

        <div className="bg-white shadow rounded p-3 text-center">
            <p>Total Seats</p>
            <h2 className="font-bold text-xl">{totalSeats}</h2>
        </div>

        <div className="bg-white shadow rounded p-3 text-center">
            <p>Enterprise Tools</p>
            <h2 className="font-bold text-xl">{enterpriseTools}</h2>
        </div>

        </div>
        )
    }
  