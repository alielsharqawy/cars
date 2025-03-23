"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero3.jpg";
import Services from "@/components/home/ServiceCard";
import SubscriptionsSection from "@/components/home/SubscriptionsSection";

// Define types for slides
type Slide = {
  image: typeof hero1;
  title: string;
  description: string;
};

const SLIDES: Slide[] = [
  {
    image: hero1,
    title: "اكتشف أفضل السيارات",
    description: "أفضل الأسعار والعروض في مكان واحد",
  },
  {
    image: hero2,
    title: "بيع سيارتك بسرعة",
    description: "أسهل الطرق لبيع سيارتك بأفضل سعر",
  },
  {
    image: hero3,
    title: "تصفح لوحات السيارات المميزة",
    description: "احصل على لوحة أحلامك بسهولة",
  },
];

// HeroSlide Component
const HeroSlide: React.FC<Slide> = ({ image, title, description }) => (
  <div
    className="w-full h-[60vh] md:h-[80vh] flex items-center justify-center text-center bg-cover bg-center relative"
    style={{ backgroundImage: `url(${image.src})` }}
  >
    <div className="absolute inset-0 bg-black/40"></div>
    <div className="relative z-10 text-white space-y-3 px-4">
      <h1 className="text-3xl md:text-5xl font-bold">{title}</h1>
      <p className="text-sm md:text-lg">{description}</p>
    </div>
  </div>
);

const HeroSection: React.FC = () => {
  return (
    <div>
      <header className="relative w-full">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 5000 }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{ clickable: true }}
          className="relative w-full h-[60vh] md:h-[80vh]"
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={index}>
              <HeroSlide {...slide} />
            </SwiperSlide>
          ))}
         
        </Swiper>
      </header>
      
      <div>
        <Services />
        <SubscriptionsSection />
      </div>
    </div>
  );
};

export default HeroSection;
