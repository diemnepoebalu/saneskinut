import {Swiper, SwiperSlide} from "swiper/react";
import styles from './Slider.module.scss';
import {Autoplay, Pagination, Navigation} from "swiper";

export default function Slider() {

    return (
        <section className={`${styles.slider} wrapper`}>
            <div className="content">
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
        </section>
    );
}
