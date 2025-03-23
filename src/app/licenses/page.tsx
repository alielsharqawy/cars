import React from "react";
import { ChevronDown } from "lucide-react";
import License from "./components/License";

const LicensePlates = () => {
  return (
    <div className="p-6">
      {/* Add Ad Button */}
      <div className="mb-6">
        <button className="bg-blue-700 text-white px-4 py-2 rounded-full font-bold flex items-center">
          + إضافة إعلان
        </button>
      </div>

      {/* Search Box */}
      <div className="border border-blue-700 rounded-lg p-6 bg-gray-100">
        <h2 className="text-center text-blue-700 text-xl font-bold mb-4">
          تدور على لوحة معينة؟ ابحث عنها هنا
        </h2>
        <div className="border-b border-blue-700 mb-4"></div>

        {/* Form Fields */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Type of Plate */}
          <div className="flex flex-col">
            <label>نوع اللوحة</label>
            <div className="relative">
              <select className="w-full p-2 border rounded-md appearance-none">
                <option>خصوصي</option>
                <option>نقل</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>

          {/* Type of Number */}
          <div className="flex flex-col">
            <label>نوع الأرقام</label>
            <div className="relative">
              <select className="w-full p-2 border rounded-md appearance-none">
                <option>رباعي</option>
                <option>ثلاثي</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-500" />
            </div>
          </div>
        </div>

        {/* Character Fields */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <select className="w-full p-2 border rounded-md appearance-none">
              <option>م</option>
            </select>
          </div>
          <div>
            <select className="w-full p-2 border rounded-md appearance-none">
              <option>م</option>
            </select>
          </div>
          <div>
            <select className="w-full p-2 border rounded-md appearance-none">
              <option>م</option>
            </select>
          </div>
        </div>

        {/* Number Fields */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div>
            <select className="w-full p-2 border rounded-md appearance-none">
              <option>2</option>
            </select>
          </div>
          <div>
            <select className="w-full p-2 border rounded-md appearance-none">
              <option>2</option>
            </select>
          </div>
          <div>
            <select className="w-full p-2 border rounded-md appearance-none">
              <option>2</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <div className="text-center">
          <button className="bg-blue-700 text-white px-6 py-2 rounded-full font-bold">
            بحث
          </button>
        </div>
      </div>
      <License />
    </div>
  );
};

export default LicensePlates;
