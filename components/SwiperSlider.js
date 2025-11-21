import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Mousewheel, Parallax } from "swiper/modules";

function SwiperSlider({ children, pagination, mousewheel, centeredSlides, autoplay, mobileSlides, desktopSlides, vertical }) {

    return (
        <div style={{ width: "100%" }}>
            <Swiper
                centeredSlides={centeredSlides}
                modules={[Autoplay, Pagination, Mousewheel, Parallax]}
                autoplay={autoplay ? {
                    delay: 2500,
                    disableOnInteraction: false,
                } : false}
                pagination={pagination ? { clickable: true } : false}
                mousewheel={mousewheel ? {
                    releaseOnEdges: true,
                    sensitivity: 1,
                    thresholdTime: 700,
                    virtual: true,
                    thresholdDelta: 50,
                    forceToAxis: true,
                } : false}
                grabCursor={vertical?false:true}
                speed={700}
                loop={vertical ? false : true}
                direction={vertical ? "vertical" : "horizontal"}
                parallax={true}
                breakpoints={{
                    0: { slidesPerView: mobileSlides ? mobileSlides : "auto" },
                    1204: { slidesPerView: desktopSlides ? desktopSlides : "auto" },
                }}
                spaceBetween={30}
                style={vertical ? { height: "100vh" } : {}}
            >
                {React.Children.map(children, (child, index) => (
                    <SwiperSlide key={index} >
                        {child}
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default SwiperSlider;