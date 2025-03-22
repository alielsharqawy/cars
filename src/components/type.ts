import { StaticImageData } from "next/image";

export type ServiceCardProps = {
  icon: StaticImageData; 
  title: string;
};

export type ServicesSectionProps = {
  services: ServiceCardProps[];
};