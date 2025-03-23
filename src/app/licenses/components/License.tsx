import React from "react";
import Image from "next/image";
import license from "@/app/licenses/assets/num.png";

const License = () => {
  const licenses = Array.from({ length: 20 }, (_, index) => ({
    country: "مصر",
    plateType: "EGYPT",
    letters: "د ر ش",
    numbers: "5555",
    city: "المنصورة",
    price: "350,000",
    date: "2025-5-20",
  }));

  return (
    <div>
      <div className="text-right text-xl font-bold mt-4">لوحات متاحة للبيع</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {licenses.map((licenseItem, index) => (
          <div
            key={index}
            className="border border-blue-500 rounded-lg overflow-hidden"
          >
            {/* Plate Image */}
            <div className="flex items-center justify-center  bg-gray-100">
              <Image
                src={license}
                alt="Plate Image"
                className="w-full h-24 object-contain"
              />
            </div>
            {/* Plate Info */}
            <div className="p-3 text-sm space-y-1 font-bold">
              <div className="flex justify-between items-center">
                <span>السعر: {licenseItem.price}</span>
                <span>المدينة: {licenseItem.city}</span>
              </div>
              <div className="flex justify-between items-center">
                <span>التاريخ: {licenseItem.date}</span>
                <button className="bg-blue-700 text-white px-4 py-1 rounded-lg text-sm">
                  مشاهدة التفاصيل
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default License;
