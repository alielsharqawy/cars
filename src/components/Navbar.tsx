"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FiMenu } from "react-icons/fi";
import Logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="flex items-center justify-between px-6 py-1 bg-white"
      dir="rtl"
    >
      {/* logo */}
      <div className="logo">
        <Image src={Logo} alt="logo-image" width={120} height={50} />
      </div>

      {/* mobile menu*/}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-blue-900"
        >
          <FiMenu />
        </button>
      </div>

      {/* links */}
      <ul className="hidden md:flex space-x-6 space-x-reverse text-blue-900 text-lg">
        {[
          "الرئيسيه",
          "مدربين",
          "اسئله ذكيه",
          "بيع سيارات",
          "بيع اللوحات المميزه",
        ].map((item, index) => (
          <li key={index}>
            <Link
              href={`/${item === "الرئيسيه" ? "" : item.replace(/\s+/g, "-")}`}
              className="hover:text-gray-700"
            >
              {item}
            </Link>
          </li>
        ))}
      </ul>

      {/*  buttons */}
      <div className="flex items-center space-x-4 space-x-reverse">
        <div className="hidden md:flex gap-3">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
            اشتراك
          </button>
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
            تسجيل الدخول
          </button>
        </div>
      </div>

      {/* drawer */}
      {isOpen && (
        <div className="fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-6 md:hidden">
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl text-gray-600 absolute top-4 left-4"
          >
            ✖
          </button>
          <ul className="flex flex-col space-y-4 text-blue-900 text-lg font-semibold mt-10">
            {[
              "الرئيسيه",
              "مدربين",
              "اسئله ذكيه",
              "بيع سيارات",
              "بيع اللوحات المميزه",
            ].map((item, index) => (
              <li key={index}>
                <Link
                  href={`/${
                    item === "الرئيسيه" ? "" : item.replace(/\s+/g, "-")
                  }`}
                  className="block py-2 px-4 hover:bg-gray-100 rounded-md"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </li>
            ))}
          </ul>

          {/* button drawer */}
          <div className="mt-6 flex flex-col gap-3">
            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition">
              اشتراك
            </button>
            <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-white transition">
              تسجيل الدخول
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
