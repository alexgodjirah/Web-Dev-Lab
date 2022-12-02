import React from 'react';
import '../styles/techStack.css';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/autoplay';
import 'swiper/css/effect-cards';

// Import required modules
import { Autoplay, Scrollbar, EffectCards } from 'swiper';

export default function TechStack() {
    return (
        <div className="techStack">
            <div className="techStack--title">
                <h2>Tech Stacks</h2>
            </div>

            <div className="techStack--container">
                <div id="techStack--front-end" className="container--items">
                    <div className="items--title">
                        <h3>Front-End</h3>
                    </div>

                    <div className="items--slider">
                        <Swiper
                            direction={'horizontal'}
                            spaceBetween={10}
                            slidesPerView={1}
                            effect={'cards'}
                            loop={true}
                            grabCursor={true}
                            cardsEffect={{
                                perSlideOffset: 10,
                                slideShadows: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            scrollbar={{
                                hide: true,
                            }}
                            modules={[Autoplay, Scrollbar, EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>HTML</SwiperSlide>
                            <SwiperSlide>CSS</SwiperSlide>
                            <SwiperSlide>ReactJs</SwiperSlide>
                            <SwiperSlide>NextJs</SwiperSlide>
                            <SwiperSlide>VueJs</SwiperSlide>
                            <SwiperSlide>Redux</SwiperSlide>
                            <SwiperSlide>Material UI</SwiperSlide>
                            <SwiperSlide>Chakra UI</SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div id="techStack--back-end" className="container--items">
                    <div className="items--title">
                        <h3>Back-End</h3>
                    </div>

                    <div className="items--slider">
                        <Swiper
                            direction={'horizontal'}
                            spaceBetween={10}
                            slidesPerView={1}
                            effect={'cards'}
                            loop={true}
                            grabCursor={true}
                            cardsEffect={{
                                perSlideOffset: 10,
                                slideShadows: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            scrollbar={{
                                hide: true,
                            }}
                            modules={[Autoplay, Scrollbar, EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>NodeJs</SwiperSlide>
                            <SwiperSlide>ExpressJs</SwiperSlide>
                            <SwiperSlide>Sequelize ORM</SwiperSlide>
                            <SwiperSlide>PostgreSQL</SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div id="techStack--languages" className="container--items">
                    <div className="items--title">
                        <h3>Languages</h3>
                    </div>

                    <div className="items--slider">
                        <Swiper
                            direction={'horizontal'}
                            spaceBetween={10}
                            slidesPerView={1}
                            effect={'cards'}
                            loop={true}
                            grabCursor={true}
                            cardsEffect={{
                                perSlideOffset: 10,
                                slideShadows: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            scrollbar={{
                                hide: true,
                            }}
                            modules={[Autoplay, Scrollbar, EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>JavaScript</SwiperSlide>
                            <SwiperSlide>C#</SwiperSlide>
                        </Swiper>
                    </div>
                </div>

                <div id="techStack--tools" className="container--items">
                    <div className="items--title">
                        <h3>Tools</h3>
                    </div>

                    <div className="items--slider">
                        <Swiper
                            direction={'horizontal'}
                            spaceBetween={10}
                            slidesPerView={1}
                            effect={'cards'}
                            loop={true}
                            grabCursor={true}
                            cardsEffect={{
                                perSlideOffset: 10,
                                slideShadows: true,
                            }}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            scrollbar={{
                                hide: true,
                            }}
                            modules={[Autoplay, Scrollbar, EffectCards]}
                            className="mySwiper"
                        >
                            <SwiperSlide>VS Code</SwiperSlide>
                            <SwiperSlide>Postman</SwiperSlide>
                            <SwiperSlide>Git</SwiperSlide>
                            <SwiperSlide>Bash/Shell</SwiperSlide>
                            <SwiperSlide>Figma</SwiperSlide>
                            <SwiperSlide>Adobe Photoshop</SwiperSlide>
                            <SwiperSlide>Adobe Illustrator</SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
}
