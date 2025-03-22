import SubscriptionCard from "./SubscriptionCard";

const subscriptionsData = [
  {
    title: "باقة المبتدئين",
    price: "1000 ج.م",
    oldPrice: "1200 ج.م",
    features: [
      { text: "درس قيادة لمدة 30 دقيقة", completed: true },
      { text: "درس الطريق السريع", completed: false },
      { text: "وقت إضافي", completed: "disabled" },
    ],
  },
  {
    title: "باقة المتقدمين",
    price: "1500 ج.م",
    oldPrice: "2000 ج.م",
    features: [
      { text: "درس قيادة لمدة 60 دقيقة", completed: true },
      { text: "درس الطريق السريع 2", completed: true },
      { text: "وقت إضافي", completed: false },
    ],
  },
  {
    title: "باقة المحترفين",
    price: "2500 ج.م",
    oldPrice: "3000 ج.م",
    features: [
      { text: "دورة متكاملة للقيادة الاحترافية", completed: true },
      { text: "دروس متقدمة في المناورات", completed: true },
      { text: "وقت إضافي مجاني", completed: true },
    ],
  },
];

export default function SubscriptionsSection() {
  return (
    <section className="py-12 px-6 bg-gray-50">
      {/* عنوان القسم */}
      <div className="mb-8 text-center">
        <h2 className="text-3xl font-bold relative inline-block">
          الاشتراكات
          <span className="block w-[200px] h-1 bg-blue-500 mt-2 mx-auto"></span>
        </h2>
        <p className="text-gray-600 mt-2 font-bold">تحقق من عروضنا الخاصة والتخفيضات</p>
      </div>

      {/* بطاقات الاشتراك */}
      <div className="flex flex-wrap justify-center gap-6">
        {subscriptionsData.map((subscription, index) => (
          <SubscriptionCard key={index} {...subscription} />
        ))}
      </div>
    </section>
  );
}
