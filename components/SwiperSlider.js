import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Mousewheel } from "swiper/modules";

function SwiperSlider({ children, pagination, mousewheel, centeredSlides,autoplay,mobileSlides,desktopSlides }) {
    const [isEnd, setIsEnd] = useState(false);

    return (
        <div style={{ width: "100%" }}>
            <Swiper
                centeredSlides={centeredSlides}
                modules={[Autoplay, Pagination, Mousewheel]}
                autoplay={ autoplay ? {
                    delay: 2500,
                    disableOnInteraction: false,
                } : false}
                pagination={pagination ? {clickable:true} : false}
                mousewheel={mousewheel}
                grabCursor={true}
                loop={true}
                slidesPerView={"auto"}
                breakpoints={{
                    0: { slidesPerView: mobileSlides ? mobileSlides : "auto"},
                    1204: { slidesPerView: desktopSlides ? desktopSlides : "auto"},
                }}
                spaceBetween={30}
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