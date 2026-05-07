type CardProps={
    title:string,
    description:string
}
export default function Card(props:CardProps)
{
    return(
        <div className="bg-white shadow rounded p-5 m-5  text-center hover:transition hover:shadow-lg cursor-pointer">
            <h1 className="text-xl font-bold">
                {props.title}
            </h1>
            <p className="mt-2 text-gray-600">
                {props.description}
            </p>
        </div>
    )
}