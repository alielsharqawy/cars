import React from "react";
import Image from "next/image";
import hero from "@/app/cars/assets/buy-car.png";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";

const BuyCars = () => {
  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="relative w-full h-30 sm:h-45">
        <Image
          src={hero}
          alt="Blue and Yellow Cars"
          layout="fill"
          objectFit="cover"
          className="drop-shadow-2xl"
        />
      </div>

      {/* Action Buttons & Description */}
      <div className="flex flex-col lg:flex-row justify-between items-center py-8 px-4 lg:px-20">
        <div className="text-center lg:text-left mb-4 lg:mb-0">
          <h2 className="text-2xl font-bold mb-2">عربيات جديدة ومستعملة للبيع</h2>
          <p className="text-gray-600">
            اشتري وبيع عربيتك من أكبر تشكيلة للعربيات المستعملة في مصر
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 bg-gray-50 p-1 border-1 border-gray-300 rounded-lg">
          <button className="px-6 py-2  text-blue-700  text-lg font-semibold hover:bg-blue-100 rounded-full">
            شراء عربية
          </button>
          <button className="px-6 py-2  text-blue-700  text-lg font-semibold hover:bg-blue-100 rounded-full">
            بيع عربية
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row">
        <Sidebar />
        <Content />
      </div>
    </div>
  );
};

export default BuyCars;
