export default function Footer(){
    return (
        <footer className="bg-black flex items-center justify-between p-10">
            <h1 className="text-xl font-bold text-white">Credex Audit</h1>
            <p className="text-white">© 2024 Credex. All rights reserved.</p>
            <a href="https://www.credex.com" target="_blank"
             rel="noopener noreferrer"
             className=" text-blue-400 hover:text-blue-300"
             >
                Visit our website
            </a>    
        </footer>
    )
}