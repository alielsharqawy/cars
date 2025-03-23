import Image from "next/image";
import Car from "@/app/cars/assets/car.png";

const Content = () => {
  const cars = [
    {
      name: "ب ام دبليو 2020",
      price: "1,750,000 ج.م",
      category: "الفئة الثانية",
      installment: "من 12 شهرًا",
      year: "2019",
      km: "79,700 كم",
    },
    // نسخ المزيد من السيارات حسب الحاجة
  ];

  return (
    <div className="w-full lg:w-3/4 p-6">
      <div className="mb-6 text-right text-xl font-bold">113 عربية متاحة</div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cars.map((car, index) => (
          <div
            key={index}
            className=" border border-gray-300 rounded-lg overflow-hidden"
          >
            <Image
              src={Car}
              alt={car.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-bold mb-1">{car.name}</h3>
              <p className="text-sm text-gray-500 mb-1">{car.category}</p>

              <div className="flex justify-between items-center mb-1">
                <p className="text-xl font-bold ">{car.price}</p>
                <p className="text-blue-600 text-sm font-bold">
                  {car.installment}
                </p>
              </div>
              <div className="flex justify-start items-center gap-3 text-gray-500 text-sm font-bold">
                <span>{car.km}</span>
                <span>{car.year}</span>
                <span>اوتوماتيك</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Content;
