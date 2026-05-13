"use client"
export default function Navbar(){
            function openGithub() {
        window.open(
            "https://github.com/MarellaHasmitha/credex-audit-tool",
            "_blank"
        );
        }
    return (
        <nav className="flex justify-between items-center p-5 bg-gray-200">
            <h1 className="text-2xl font-bold">
                Credex Dashboard
            </h1>
            <button
                onClick={openGithub}
                className="bg-blue-500 rounded px-3 py-1 text-white font-bold hover:bg-blue-600 cursor-pointer"
                >
                GitHub
            </button>
           
        </nav>
    )
}