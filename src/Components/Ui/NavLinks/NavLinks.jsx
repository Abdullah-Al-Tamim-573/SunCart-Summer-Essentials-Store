'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";


const NavLinks = ({href, children}) => {
    let path = usePathname();
     
    return (
       <>
         <Link className={`text-[1rem] md:border-b-3 ${path === href? 'border-[#fd5c1c] pb-1 text-[#fd5c1c]':''} md:text-[1.1rem]  md:font-medium`} href={href}>
             {
                children
             }
         </Link>
       </>
    );
};

export default NavLinks;