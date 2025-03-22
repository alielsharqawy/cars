import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start">
        {/* Newsletter Section */}
        <div className="mb-6 md:mb-0">
          <h2 className="text-2xl font-bold mb-2">اخر اخبارنا</h2>
          <div className="flex space-x-2">
            <input
              type="text"
              placeholder="أدخل بريدك الإلكتروني"
              className="p-2 rounded-md bg-blue-700 text-white placeholder-gray-300 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md">اشتراك</button>
          </div>
        </div>

        {/* Menu Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold mb-2">القائمة</h3>
          <ul className="space-y-1">
            <li>الرئيسية</li>
            <li>مدربين</li>
            <li>اسئلة ذكية</li>
            <li>بيع السيارات</li>
            <li>بيع اللوحات المميزة</li>
          </ul>
        </div>

        {/* Info Section */}
        <div className="mb-6 md:mb-0">
          <h3 className="font-bold mb-2">معلومات</h3>
          <ul className="space-y-1">
            <li>الاماكن</li>
            <li>الدعم</li>
            <li>البنود</li>
            <li>الخصوصية</li>
          </ul>
        </div>

        {/* Logo and Description */}
        <div className="text-sm">
          <h3 className="font-bold mb-2">SMART DRIVER</h3>
          <p>هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة.</p>
          <p>تمت الكتابة بشكل لطيف ليكون متناسقًا مع الشكل العام للتصميم قبل إضافة المحتوى النصي.</p>
          <p className="mt-4">حقوق النشر © اكتشف 2024 جميع الحقوق محفوظة</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
