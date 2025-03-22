export default function SubscriptionCard({
    title,
    price,
    oldPrice,
    features,
  }: {
    title: string;
    price: string;
    oldPrice?: string;
    features: { text: string; completed: boolean | "disabled" }[];
  }) {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 w-full sm:w-[48%] md:w-[31%] lg:w-[22%]">
        {/* العنوان */}
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-gray-500 mt-2">تقديم جميع حصص القيادة بمجموعة متنوعة</p>
  
        {/* السعر */}
        <div className="flex gap-4 justify-start items-center mt-4">
          <p className="bg-blue-100 p-2 text-blue-500 font-bold rounded-lg">{price}</p>
          {oldPrice && <p className="text-gray-400 line-through text-sm">{oldPrice}</p>}
        </div>
  
        {/* الميزات */}
        <div className="text-gray-600 text-sm mt-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
              <p className={`${feature.completed === "disabled" ? "text-gray-400" : "text-blue-900"} font-bold`}>
                {feature.text}
              </p>
            </div>
          ))}
        </div>
  
        {/* زر الاشتراك */}
        <div className="text-center mt-6">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            اشتراك
          </button>
        </div>
      </div>
    );
  }
  