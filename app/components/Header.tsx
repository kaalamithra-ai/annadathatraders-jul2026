"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { useLocale } from "next-intl";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false)
  let darkModeIcon;
  let menuIcon;
  if(mobileMenuOpen==true){
    menuIcon = <svg className="w-10 h-10">
                <line x1="20%" x2="80%" y1="20%" y2="80%" className="stroke-4 stroke-gray-100" />
                <line x1="20%" x2="80%" y1="80%" y2="20%" className="stroke-4 stroke-gray-100" />
               </svg>;
  }
  else{
    menuIcon = <svg className="w-12 h-8">
                <line x1="20%" x2="90%" y1="10%" y2="10%" className="stroke-4 stroke-gray-100" />
                <line x1="20%" x2="90%" y1="50%" y2="50%" className="stroke-4 stroke-gray-100" />
                <line x1="20%" x2="90%" y1="90%" y2="90%" className="stroke-4 stroke-gray-100" />
               </svg>;
  }
  if(darkMode==true){
    darkModeIcon = <img src="/sun.png" className="object-contain w-full h-full bg-white rounded-full" />
  }
  else{
    darkModeIcon = <img src="/sun.png" className="object-contain w-full h-full bg-white rounded-full" />
  }
  return (
    <header className="h-[65px] dark:bg-gray-900 bg-green-800 flex items-center sticky z-1 top-0 shadow-md">
      <nav className="w-full dark:text-gray-200 text-gray-100 flex justify-between items-center">
        <Link href="/" className="text-xl w-[70%] md:text-2xl md:w-[30%] h-[100%] flex items-center gap-2 font-bold">
          <img src="/logo.svg" className="w-14 h-13 ml-2 bg-white object-cover rounded-2xl" /><span>Annadaata Traders</span>
        </Link>

        <div className="hidden md:flex mr-3 gap-6 items-center">
          <Link href="/" className="text-[100%] transition-all delay-50 duration-50 ease-in-out active:border-0 hover:border-b-2 border-gray-100">
            Home
          </Link>
          <Link href="/product" className="text-[100%] transition-all delay-50 duration-50 ease-in-out active:border-0 hover:border-b-2 border-gray-100">
            Products
          </Link>
          <Link href="/browse/crop" className="text-[100%] transition-all delay-50 duration-50 ease-in-out active:border-0 hover:border-b-2 border-gray-100">
            By Crop
          </Link>
          <Link href="/browse/problem" className="text-[100%] transition-all delay-50 duration-50 ease-in-out active:border-0 hover:border-b-2 border-gray-100">
            By Problem
          </Link>
          <Link href="/browse/category" className="text-[100%] transition-all delay-50 duration-50 ease-in-out active:border-0 hover:border-b-2 border-gray-100">
            By Category
          </Link>
          <Link href="/about" className="text-[100%] transition-all delay-50 duration-50 ease-in-out active:border-0 hover:border-b-2 border-gray-100">
            About
          </Link>
          <Link href="/contact" className="text-[100%] transition-all delay-50 duration-50 ease-in-out active:border-0 hover:border-b-2 border-gray-100">
            Contact
          </Link>
        </div>
          <button
            className="w-10 h-10 md:mr-5 cursor-pointer"
            onClick={()=>{
              if(darkMode==true){
                setDarkMode(false)
                document.getElementById("body")?.setAttribute("data-theme","dak");
              }
                else{
                  setDarkMode(true)
                  document.getElementById("body")?.setAttribute("data-theme","dark");
                }
              }}
          >
            {darkModeIcon}
          </button>
          <button
            className=" md:hidden mr-1 transition-all delay-100 duration-100 ease-in-out"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {menuIcon}
          </button>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden dark:bg-gray-800 bg-green-800 absolute top-[65px] right-0 left-0 z-2 px-4 py-2 dark:text-gray-300 text-gray-100">
          <Link href="/" className="block py-2 hover:text-green-200">
            Home
          </Link>
          <Link href="/product" className="block py-2 hover:text-green-200">
            Products
          </Link>
          <Link href="/browse/crop" className="block py-2 hover:text-green-200">
            By Crop
          </Link>
          <Link href="/browse/problem" className="block py-2 hover:text-green-200">
            By Problem
          </Link>
          <Link href="/browse/category" className="block py-2 hover:text-green-200">
            By Category
          </Link>
          <Link href="/about" className="block py-2 hover:text-green-200">
            About
          </Link>
          <Link href="/contact" className="block py-2 hover:text-green-200">
            Contact
          </Link>
          {/* <div className="flex items-center gap-2 pt-2 border-t border-green-500">
            <span className="text-green-200 text-sm">Language:</span>
            <button
              onClick={() => switchLanguage("en")}
              className={`text-xs uppercase font-semibold px-2 py-1 rounded border ${
                currentLocale === "en"
                  ? "bg-green-700 border-green-300"
                  : "border-green-400 hover:text-green-200"
              }`}
            >
              English
            </button>
            <button
              onClick={() => switchLanguage("kn")}
              className={`text-xs uppercase font-semibold px-2 py-1 rounded border ${
                currentLocale === "kn"
                  ? "bg-green-500 border-green-300"
                  : "border-green-400 hover:text-green-200"
              }`}
            >
              ಕನ್ನಡ
            </button>
          </div> */}
        </div>
      )}
    </header>
  );
}