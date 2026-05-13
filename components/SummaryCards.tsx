type SummaryProps={
    totalTools:number;
    totalCost:number;
    totalSeats:number;
    paidTools:number;
};

export default function SummaryCards(
    {
    totalTools,
     totalCost,
     totalSeats,
     paidTools
    }:SummaryProps){
        return(
            
        <div className="grid grid-cols-2 md:grid-cols-2 gap-5 mb-5  max-w-xl mx-auto">

        <div className="bg-white shadow rounded p-3 text-center">
            <p>Total Tools</p>
            <h2 className="font-bold text-xl">{totalTools}</h2>
        </div>

        <div className="bg-white shadow rounded p-3 text-center">
            <p>Total Cost</p>
            <h2 className="font-bold text-xl">${totalCost}</h2>
        </div>

        <div className="bg-white shadow rounded p-3 text-center">
            <p>Total Seats</p>
            <h2 className="font-bold text-xl">{totalSeats}</h2>
        </div>

        <div className="bg-white shadow rounded p-3 text-center">
            <p>Paid Tools</p>
            <h2 className="font-bold text-xl">{paidTools}</h2>
        </div>

        </div>
        )
    }
  