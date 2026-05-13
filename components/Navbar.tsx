import Link from "next/link";

export default function Navbar(){
    return (
        <nav className="flex justify-between items-center p-5 bg-gray-200">
            <h1 className="text-2xl font-bold">
                Credex Dashboard
            </h1>

            <Link href="/audit">
            <button className="bg-blue-500 rounded px-3 py-1 text-white font-bold hover:bg-blue-600 cursor-pointer">
                GitHub
            </button>
            </Link>

        </nav>
    )
}