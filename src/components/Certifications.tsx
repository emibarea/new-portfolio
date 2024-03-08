"use client";
import { certifications } from "@/utils/certs";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Pagination, EffectCards } from "swiper/modules";
import CertCard from "./CertCard";
import SectionTitle from "./SectionTitle";

const Certifications = () => {
  return (
    <section className="mt-12 w-screen sm:px-4">
      <div className="max-w-[1200px] mx-auto">
        <SectionTitle title="Desliza para ver mis certificaciones." />
      </div>

      <div className="flex items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={false}
          centeredSlides={true}
          slidesPerView={"auto"}
          pagination={{
            clickable: true,
          }}
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 300,
            modifier: 1,
            slideShadows: true,
          }}
          initialSlide={Math.floor(certifications.length / 2)} // Establecer el índice medio
          className="max-w-screen"
          modules={[EffectCards, EffectCoverflow, Pagination]}
        >
          {/* Swiper items */}
          {certifications.map((item, i) => {
            return (
              <SwiperSlide className="p-4 max-w-[400px]" key={i}>
                <CertCard item={item} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Certifications;
