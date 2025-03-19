import Link from "next/link" ;

export default function MenuBar(){
    return (
        <nav className="fixed flex bottom-0 left-0 right-0 bg-rose-900 px-[10px] p-[15px] pb-[10px] justify-between">
            <Link className="hover:text-rose-500" href="/Home">HomePage</Link>
            <Link className="hover:text-rose-500" href="/about">About</Link>
            <Link className="hover:text-rose-500" href="/Contact">Contact</Link>
        </nav>
    )
}