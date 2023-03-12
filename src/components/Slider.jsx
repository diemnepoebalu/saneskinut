import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles

// import required modules
import {Autoplay, Pagination, Navigation} from "swiper";

export default function Slider() {

    return (
        <div className="main_slider">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide><img src="../img/1.jpg" alt="img"/></SwiperSlide>
                <SwiperSlide><img src="../img/1.jpg" alt="img"/></SwiperSlide>
                <SwiperSlide><img src="../img/1.jpg" alt="img"/></SwiperSlide>
            </Swiper>
        </div>
    );
}
