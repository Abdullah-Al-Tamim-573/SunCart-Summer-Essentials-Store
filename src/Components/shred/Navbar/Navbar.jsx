'use client'

import { DrawerPart } from "@/Components/Ui/Drawer/Drawer";
import NavLinks from "@/Components/Ui/NavLinks/NavLinks";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-toastify";

const Navbar = () => {
 
  const { data: session } = authClient.useSession();
  

  let handleSignOut = async() => {
    await authClient.signOut();
    toast.success('user signout successfully');
  }

  

  return (
    <>
      {/* small device nav */}
      <nav className="nav1 flex md:hidden">
        <div className="navbar bg-base-100 shadow-sm">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />{" "}
                </svg>
              </div>
              <ul
                tabIndex="-1"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
                <li>
                  <NavLinks href={"/"}>Home</NavLinks>
                </li>
                <li>
                  <NavLinks href={"/products"}>Products</NavLinks>
                </li>
                <li>
                  <NavLinks href={"/my-profile"}>My Profile</NavLinks>
                </li>
                <li>
                  <Link
                    className="btn text-[1.1rem] px-6 rounded-3xl text-white font-bold bg-linear-to-r from-[#fc932c] to-[#fd5c1c]"
                    href={"/register"}
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="">
            <Image
              alt="logo"
              width={210}
              height={50}
              src={"/Images/Logo Icon/logo.png"}
            ></Image>
          </div>
          <div className="navbar-end">
            <DrawerPart></DrawerPart>

            <button className="btn btn-circle">
              {" "}
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* md and lg device nav */}
      <nav className="bg-base-100 shadow-sm">
        <div className="navbar hidden md:flex max-w-[95%] mx-auto">
          <div className="navbar-start">
            {/* logo */}
            <Image
              alt="logo"
              width={200}
              height={50}
              src={"/Images/Logo Icon/logo.png"}
            ></Image>
          </div>
          <div className="navbar-center flex">
            <ul className=" flex gap-8 lg:gap-15 items-center px-1">
              <li>
                <NavLinks href={"/"}>Home</NavLinks>
              </li>
              <li>
                <NavLinks href={"/products"}>Products</NavLinks>
              </li>
              <li>
                <NavLinks href={"/my-profile"}>My Profile</NavLinks>
              </li>
            </ul>
          </div>
          <div className="navbar-end gap-3">
            <DrawerPart></DrawerPart>

            <button className="btn btn-circle">
              {" "}
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />{" "}
                </svg>
                <span className="badge badge-sm indicator-item">0</span>
              </div>
            </button>
            
             {session?.user? 
                 <button
                 onClick={handleSignOut}
              className="btn text-[1.1rem] px-6 rounded-3xl text-white font-bold bg-[red]"
              
            >
             LogOut
            </button>
             : 

             <Link
              className="btn text-[1.1rem] px-6 rounded-3xl text-white font-bold bg-linear-to-r from-[#fc932c] to-[#fd5c1c]"
              href={"/register"}
            >
              Register
            </Link>
                
            
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
