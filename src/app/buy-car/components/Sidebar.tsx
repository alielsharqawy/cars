import { ChevronDown } from "lucide-react";
import { FaCar, FaAccessibleIcon, FaCarAlt, FaCarSide } from "react-icons/fa";
import { CgBmw } from "react-icons/cg";

const Sidebar = () => {
  const brandIcons = {
    اودي: <FaCar />,
    "ب ام دبليو": <CgBmw />,
    شيري: <FaAccessibleIcon />,
    شيفروليه: <FaCarAlt />,
    ستروين: <FaCarSide />,
  };

  return (
    <div className="w-full lg:w-1/4 p-4 border-r border-gray-300 space-y-6">
      <h1 className="font-bold text-lg mb-4">حدد بحثك</h1>
      <h3 className="font-bold text-lg mb-4">السعر</h3>
      <input type="range" min="500000" max="4000000" className="w-full mb-6" />

      <h3 className="font-bold text-lg mb-4">الماركة والموديل</h3>
      <div className="space-y-2 mb-6 border border-gray-300 p-4 rounded-lg">
        {Object.keys(brandIcons).map((brand) => (
          <div
            key={brand}
            className="flex items-center justify-between p-3 border border-gray-300 rounded-lg"
          >
            <div className="flex items-center space-x-2">
              {brandIcons[brand]}
              <label htmlFor={brand}>{brand}</label>
            </div>
            <div className="flex items-center space-x-2">
              <input type="checkbox" id={brand} />
              <ChevronDown className="text-gray-500" />
            </div>
          </div>
        ))}
      </div>

      <h3 className="font-bold text-lg mb-4">القسط</h3>
      <input type="range" min="10000" max="265000" className="w-full mb-6" />

      <h3 className="font-bold text-lg mb-4">حالة العربية</h3>
      <div className="space-y-2 mb-6 border border-gray-300 p-4 rounded-lg">
        {["متاحة", "محجوزة", "جاري تسليم العربية"].map((status) => (
          <div
            key={status}
            className="flex items-center space-x-2 border border-gray-300 p-3 rounded-lg"
          >
            <input type="checkbox" id={status} />
            <label htmlFor={status}>{status}</label>
          </div>
        ))}
      </div>

      <h3 className="font-bold text-lg mb-4">سنة التصنيع</h3>
      <div className="space-y-2 mb-6 border border-gray-300 p-4 rounded-lg">
        <input
          type="text"
          placeholder="اختر السنة"
          className="border w-full p-2 mb-2 rounded-md text-gray-300"
        />
        <input
          type="text"
          placeholder="اختر السنة"
          className="border w-full p-2 mb-2 rounded-md text-gray-300"
        />
      </div>
      <h3 className="font-bold text-lg mb-4">كيلو متر</h3>
      <div className="space-y-2 mb-6 border border-gray-300 p-4 rounded-lg">
        {[
          "10,000 كم أو اقل",
          "30,000 كم أو اقل",
          "50,000 كم أو اقل",
          "75,000 كم أو اقل",
          "100,000 كم أو اقل",
          "125,000 كم أو اقل",
          "150,000 كم أو اقل",
        ].map((km) => (
          <div
            key={km}
            className="flex items-center space-x-2 border-1 border-gray-300 p-3 rounded-lg"
          >
            <input type="checkbox" id={km} />
            <label htmlFor={km}>{km}</label>
          </div>
        ))}
      </div>
      <h3 className="font-bold text-lg mb-4">نوع العربية</h3>
      <div className="space-y-2 mb-6 border border-gray-300 p-4 rounded-lg">
        {["4x4", "كوبية", "كروس اوفر", "هاتشباك", "سيدان", "suv"].map(
          (type) => (
            <div
              key={type}
              className="flex items-center space-x-2 border-1 border-gray-300 p-3 rounded-lg"
            >
              <input type="checkbox" id={type} />
              <label htmlFor={type}>{type}</label>
            </div>
          )
        )}
      </div>
      <h3 className="font-bold text-lg mb-4">ناقل الحركة</h3>
      <div className="space-y-2 mb-6 border border-gray-300 p-4 rounded-lg">
        {["اوتوماتيك", "مانيوال"].map((transmission) => (
          <div
            key={transmission}
            className="flex items-center space-x-2 border-1 border-gray-300 p-3 rounded-lg"
          >
            <input type="checkbox" id={transmission} />
            <label htmlFor={transmission}>{transmission}</label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
