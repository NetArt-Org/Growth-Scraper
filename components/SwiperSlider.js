import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper/modules";

function SwiperSlider({ children, pagination, centeredSlides, autoplay, mobileSlides, desktopSlides, marquee }) {

    return (
        <div style={{ width: "100%" }}>
            <Swiper 
                className={marquee ? "marquee-swiper" : ""}
                centeredSlides={centeredSlides}
                modules={[Autoplay, Pagination,]}
                autoplay={autoplay ? {
                    delay: marquee ? 0 : 2500,
                    disableOnInteraction: false,
                } : false}
                pagination={pagination ? { clickable: true } : false}
                speed={marquee ? 3000 : 700}
                loop={true}
                lazy={true}
                breakpoints={{
                    0: { slidesPerView: mobileSlides ? mobileSlides : "auto" },
                    1204: { slidesPerView: desktopSlides ? desktopSlides : "auto" },
                }}
                spaceBetween={30}
                on={{
                    init() {
                      setTimeout(() => {
                        window.dispatchEvent(new Event("resize"));
                      }, 100); // Safari fix
                    },
                  }}
                  
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index} className={marquee ? "marquee-swiper" : ""}>
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperSlider;