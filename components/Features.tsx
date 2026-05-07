import Card from "./Card";
export default function Features() {
        return (

            <section className="m-5 bg-white shadow rounded p-5 ">
                <h1 className="text-2xl font-bold mb-4 text-center">Features</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    <Card 
                       title="AI cost Tracking"
                       description="Track spending"
                      />
                     
                     <Card 
                       title="Usuage Analytics"
                       description="Analyze Subscriptions"
                      />

                      <Card
                      title="Smart Recommendations"
                      description="Optimize Costs"
                      />

                       <Card
                       title="Expense Monitoring"
                       description="Track and analyze expenses"
                       />

                </div>
            </section>
        )
    }
