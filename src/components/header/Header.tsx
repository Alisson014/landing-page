'use client';
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { MdMenu, MdOutlineOpenInNew } from "react-icons/md";
import Link from "next/link";


export const Header = () => {
    const currentPath = usePathname();
    const [title, setTitle] = useState("CodarSe");
    const [drawer, setDrawer] = useState(false);

    useEffect(() => {
        setTitle(document.title);
        setDrawer(false);
    }, [currentPath])

    return(
        <nav className="flex gap-4 items-center justify-start bg-primary md:justify-center sm:py-4 py-2 px-4" >
            <button className="sm:hidden" onClick={() => setDrawer(true)}>
                <MdMenu/>
            </button>

            <ul className=" flex gap-4 my-2 items-center" tabIndex={drawer ? -1 : undefined}>
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
                {title}
            </h1>

            {/* Drawer */}
            <div 
            data-open={drawer} 
            tabIndex={drawer ? undefined : -1}
            onClick={() => setDrawer(false)}
            className="-translate-x-0 data-[open=false]:-translate-x-full 
            transition-transform bg-gradient-to-r from-background 
            fixed top-0 left-0 bottom-0 right-0">
                <ul onClick={(e) => {e.stopPropagation()}} className="flex flex-col gap-4 bg-background p-4 w-60 h-full items-stretch">
                
                    <li data-active = {currentPath === '/'} className='data-[active=true]:border-b-2'>
                        <Link href="/" >
                        Página Inicial </Link>
                    </li>
                    <li data-active = {currentPath === '/cursos'} className='data-[active=true]:border-b-2'>
                        <Link href="/cursos"> 
                        Cursos </Link>
                    </li>


                    <li >
                        <Link href="https://blog.codarse.com" target="_blank" className="flex items-center gap-1"> 
                            Blog
                            <MdOutlineOpenInNew/>
                        </Link>
                    </li>

                </ul>
            </div>
        </nav>
    );
}
