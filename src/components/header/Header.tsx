'use client';
import { usePathname } from "next/navigation";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";
import Link from "next/link";


export const Header = () => {
    const currentPath = usePathname();

    return(
        <nav className="flex gap-4 items-center justify-start md:justify-center bg-primary sm:py-4 py-2 px-4">
            <button className="sm:hidden">
                <MdMenu/>
            </button>

            <ul className=" flex gap-4 my-2 items-center">
                <li >
                    <Link href="/" className="border-2 rounded-md py-1 px-1 font-bold">
                       CODARSE
                    </Link>
                </li>

                <li className="hidden sm:block" >
                    <Link href="/" data-active = {currentPath === '/'} className='data-[active=true]:underline'>
                     Página Inicial </Link>
                </li>
                <li className="hidden sm:block">
                    <Link href="/cursos" data-active = {currentPath === '/cursos'} className='data-[active=true]:underline'> 
                    Cursos </Link>
                </li>


                <li className="hidden sm:block">
                    <Link href="https://blog.codarse.com" target="_blank" className="flex items-center gap-1"> 
                        Blog
                        <MdOutlineOpenInNew/>
                     </Link>
                </li>

            </ul>

            <h1 className="sm:hidden">
                CodarSe Página Inicial
            </h1>
        </nav>
    );
}
