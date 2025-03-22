"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import hero1 from "@/assets/hero1.jpg";
import hero2 from "@/assets/hero2.jpg";
import hero3 from "@/assets/hero4.jpg";
import logo from "@/assets/logo.png";
import Services from "@/components/home/ServiceCard";
import SubscriptionsSection from "@/components/home/SubscriptionsSection";

// Define types for slides and navigation links
type Slide = {
  image: typeof hero1;
  title: string;
  description: string;
};

type NavLink = {
  href: string;
  label: string;
};

// Constants for slides and navigation links
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

const NAV_LINKS: NavLink[] = [
  { href: "#", label: "الرئيسية" },
  { href: "#", label: "مدربين" },
  { href: "#", label: "أسئلة ذكية" },
  { href: "#", label: "بيع سيارات" },
  { href: "#", label: "بيع اللوحات المميزة" },
];

// Props for HeroSlide component
interface HeroSlideProps {
  image: typeof hero1;
  title: string;
  description: string;
}

const HeroSlide = ({ image, title, description }: HeroSlideProps) => (
  <div
    className="w-full h-[60vh] flex items-center justify-center text-center bg-cover bg-center rounded-3xl"
    style={{ backgroundImage: `url(${image.src})` }}
  >
    <div className="relative z-10 text-white px-6 md:px-12">
      <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
      <p className="text-lg md:text-xl mt-4">{description}</p>
    </div>
  </div>
);

// Props for Navbar component
interface NavbarProps {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
}

const Navbar = ({ menuOpen, setMenuOpen }: NavbarProps) => (
  <nav className="absolute top-0 left-0 w-full flex items-center justify-between py-4 px-6 z-20">
    <Image src={logo} alt="Logo" width={70} height={50} />
    <div className="hidden md:flex space-x-6">
      {NAV_LINKS.map((link, index) => (
        <Link
          key={index}
          href={link.href}
          className="text-white hover:text-gray-300 text-lg font-semibold"
        >
          {link.label}
        </Link>
      ))}
    </div>
    <div className="hidden md:flex space-x-4">
      <button className="text-white hover:text-gray-300 text-lg font-semibold">
        تسجيل دخول
      </button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-lg font-semibold">
        اشتراك
      </button>
    </div>
    <button
      className="md:hidden text-white"
      onClick={() => setMenuOpen(!menuOpen)}
    >
      <Menu size={24} />
    </button>
    {menuOpen && (
      <div className="md:hidden absolute top-16 w-[60%] left-8 p-8 bg-blue-500 rounded-md space-y-3 py-3 text-center z-20">
        {NAV_LINKS.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="block text-white hover:text-gray-800 text-lg"
          >
            {link.label}
          </Link>
        ))}
        <button className="block bg-white text-blue-500 cursor-pointer w-full py-2 text-lg rounded-lg mt-2">
          تسجيل دخول
        </button>
        <button className="block bg-blue-700 cursor-pointer text-white w-full py-2 text-lg rounded-lg">
          اشتراك
        </button>
      </div>
    )}
  </nav>
);

function HeroSection() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  return (
    <div>
      <header className="relative w-full p-2">
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
          className="absolute w-full h-[60vh] top-0 left-0"
        >
          {SLIDES.map((slide, index) => (
            <SwiperSlide key={index}>
              <HeroSlide {...slide} />
            </SwiperSlide>
          ))}
          <ChevronRight className="swiper-button-prev bg-white rounded-full" />
          <ChevronLeft className="swiper-button-next bg-white rounded-full" />
        </Swiper>
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      </header>
      <div>
        <Services />
        <SubscriptionsSection />
      </div>
    </div>
  );
}
export default HeroSection;
