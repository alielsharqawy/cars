import Image, { StaticImageData } from "next/image";
import i1 from "@/assets/i1.png";
import i2 from "@/assets/i2.png";
import i3 from "@/assets/i3.png";
import i4 from "@/assets/i4.png";
import srv1 from "@/assets/srv1.png";
import srv2 from "@/assets/srv2.png";


type ServiceCardProps = {
  icon: StaticImageData;
  title: string;
};


type ServicesSectionProps = {
  services: ServiceCardProps[];
  featuredServices: ServiceCardProps[];
};


const ServiceCard = ({ icon, title }: ServiceCardProps) => (
  <div className="flex flex-col w-[75%] h-[20vh] items-center text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <Image
      src={icon}
      alt={title}
      width={60}
      height={60}
      className="w-16 h-16 mb-4"
    />
    <h3 className="text-xl font-semibold">{title}</h3>
  </div>
);

// (ServicesSection)
const ServicesSection = ({
  services,
  featuredServices,
}: ServicesSectionProps) => (
  <section className="py-12 bg-gray-50">
    <div className="container mx-auto px-4">
      <div className="mb-8">
        <h2 className="text-3xl font-bold relative inline-block">
          الخدمات
          <span className="block w-[100px] h-1 bg-blue-500 mt-2 mx-auto"></span>
        </h2>
        <p className="text-gray-600 mt-2 font-bold">
          البحث عن الخدمات المميزة لك.
        </p>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-2 mb-8">
        {services.map((service, index) => (
          <div key={index} className=" sm:w-1/2 md:w-1/3 lg:w-1/5 p-2">
            <ServiceCard  {...service} />
          </div>
        ))}
      </div>

    
      <div className="flex flex-wrap justify-center items-center gap-10">
        {featuredServices.map((service, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden w-full md:w-[35%]"
          >
            <Image
              src={service.icon}
              alt={service.title}
              width={400}
              height={400}
              className="w-full h-auto"
            />
           
          </div>
        ))}
      </div>
    </div>
  </section>
);

{ /* Example */ }
const servicesData: ServiceCardProps[] = [
  { icon: i1, title: "البحث عن الخدمات" },
  { icon: i2, title: "بيع اللوحات" },
  { icon: i3, title: "بيع سيارات" },
  { icon: i4, title: "أسئلة ذكية" },
];

const featuredServicesData: ServiceCardProps[] = [
  { icon: srv1, title: "البحث عن الخدمات" },
  { icon: srv2, title: "بيع السيارات" },
];

export default function Services() {
  return (
    <ServicesSection
      services={servicesData}
      featuredServices={featuredServicesData}
    />
  );
}
