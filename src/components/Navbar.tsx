"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

type NavLink = {
  href: string;
  label: string;
};

const NAV_LINKS: NavLink[] = [
  { href: "/", label: "الرئيسية" },
  { href: "/trainer", label: "مدربين" },
  { href: "#", label: "أسئلة ذكية" },
  { href: "/cars", label: "بيع سيارات" },
  { href: "/licenses", label: "بيع اللوحات المميزة" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <nav className="w-full flex items-center justify-between py-4 px-6 bg-gradient-to-r bg-white text-blue-500 shadow-lg z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3">
        <Image src={logo} alt="Logo" width={70} height={50} />
        <h1 className="text-white text-2xl font-bold hidden md:block">MyApp</h1>
      </div>
      
      {/* Desktop Links */}
      <div className="hidden md:flex space-x-6">
        {NAV_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="text-blue-500 hover:text-blue-800 text-lg font-semibold transition-colors duration-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
      
      {/* Desktop Buttons */}
      <div className="hidden md:flex space-x-4">
        <button className="text-blue-500 hover:text-blue-800 text-lg font-semibold transition-colors duration-300">
          تسجيل دخول
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold transition-transform duration-300 transform hover:scale-105">
          اشتراك
        </button>
      </div>
      
      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-blue-500"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>
      
      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 w-[80%] left-1/2 transform -translate-x-1/2 p-6 text-blue-500 rounded-lg shadow-xl space-y-4 text-center z-50 transition-all duration-300">
          {NAV_LINKS.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="block text-blue-800 hover:text-blue-600 text-xl font-semibold transition-colors duration-300"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <button 
            className="block w-full py-2 text-lg rounded-lg bg-blue-700 text-blue-500 hover:bg-blue-800 transition-all duration-300 mt-3"
            onClick={() => setMenuOpen(false)}
          >
            تسجيل دخول
          </button>
          <button 
            className="block w-full py-2 text-lg rounded-lg bg-yellow-500 text-blue-500 hover:bg-yellow-600 transition-all duration-300"
            onClick={() => setMenuOpen(false)}
          >
            اشتراك
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
