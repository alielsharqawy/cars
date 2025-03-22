import React from 'react';
import Image from 'next/image';
import trainerImage from '@/app/trainer/assets/trainer.png';
import { Star } from 'lucide-react';

const Trainer = () => {
  const trainers = Array.from({ length: 20 }, (_, index) => ({
    name: 'محمد علي',
    rating: 4.9,
    reviews: 120,
    sessionsCompleted: 100,
    image: trainerImage
  }));

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {trainers.map((trainer, index) => (
        <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
          <Image
            src={trainer.image}
            alt="Trainer Image"
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-bold mb-1">{trainer.name}</h3>
            <div className="flex items-center mb-1">
              <span className="text-yellow-500"><Star size={16} /></span>
              <span className="text-sm ml-1">{trainer.rating} ({trainer.reviews} تقييم)</span>
            </div>
            <p className="text-sm mb-2">عدد الحصص المكتملة: {trainer.sessionsCompleted} حصة</p>
            <button className="bg-blue-700 text-white px-4 py-1 rounded-full text-sm">عرض التفاصيل</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Trainer;
