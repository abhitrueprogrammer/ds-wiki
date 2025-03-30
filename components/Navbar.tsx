'use client';

import '@/app/globals.css'
import Link from "next/link";

export default function Navbar({onHomeClick, onAPIClick, onLogoClick}: {onHomeClick: () => void, onAPIClick: () => void, onLogoClick: () => void}) {
  return (
    <div className="h-[10vh] sticky top-0 w-full">
      <div className="navbar-shadow px-6 md:px-10">
        <div className="w-[15vh] md:w-[25vh] h-[5vh] relative">
            <button
                onClick={onLogoClick}
            >
                <img className="scale-125 md:scale-[1.3] md:hover:scale-[1.5] pb-5 md:pb-[3rem] transition-all duration-100 transform" src="/logo.png" alt="DS Logo" />
            </button>
        </div>
        <div className="flex items-center gap-6 md:gap-6">
          <button
            onClick={onHomeClick}
            className="text-[1rem] md:text-[1.75rem] hover:text-[#f16c05]"
          >
            Home
          </button>
          <button 
            onClick={onAPIClick}
            className="text-[1rem] md:text-[1.75rem] hover:text-[#f16c05]"
          >
            API
          </button>
        </div>
      </div>
    </div>
  );
}