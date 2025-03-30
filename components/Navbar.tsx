'use client';

import '@/app/globals.css'
import Link from "next/link";

export default function Navbar({onHomeClick}: {onHomeClick: () => void}) {
  return (
    <div className="h-[10vh] sticky top-0 w-full">
      <div className="navbar-shadow px-6 md:px-10">
        <div className="w-[15vh] md:w-[25vh] h-[5vh] relative">
          <img className="scale-125 md:scale-150 pb-5 md:pb-11" src="/logo.png" alt="DS Logo" />
        </div>
        <div className="flex items-center gap-6 md:gap-6">
        <button 
            onClick={onHomeClick}
            className="text-[1rem] md:text-[1.75rem] hover:text-[#f16c05]"
          >
            Home
          </button>
          <Link href="#" className="text-[1rem] md:text-[1.75rem] hover:text-[#f16c05]">API</Link>
        </div>
      </div>
    </div>
  );
}