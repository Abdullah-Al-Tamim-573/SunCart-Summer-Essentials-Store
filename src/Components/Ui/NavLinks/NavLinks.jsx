import Link from "next/link";


const NavLinks = ({href, children}) => {
    return (
       <>
         <Link className="text-[1rem] md:text-[1.1rem]  md:font-medium" href={href}>
             {
                children
             }
         </Link>
       </>
    );
};

export default NavLinks;