import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
import "swiper/css/pagination";
import AboutServiceItem from '../../../../components/AboutServiceItem/AboutServiceItem';

SwiperCore.use([Navigation, Pagination]);

const AboutServices = () => {
   return (
      <>
         <section className="tp-service-area-two pt-120 pb-80 bg-gray-light">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="section-title-wrapper-two mb-55 text-center wow fadeInUp" data-wow-delay=".2s">
                        <h5 className="tp-section-subtitle section__sm__title common-yellow-shape mb-20 heading-color-black">Our Advisory Team</h5>
                        <h2 className="tp-section-title heading-color-black">Guranteed Quality Cleaning <br />Service Everytime</h2>
                     </div>
                  </div>
               </div>
               <div className="tp-service-active swiper-container common-dots">
                  <Swiper
                     spaceBetween={30}
                     slidesPerView={1}
                     style={{paddingBottom:'80px'}}
                     className='swiper-wrapper'
                     pagination={{ clickable: true }}
                     autoplay={{ delay: 6000 }}
                     breakpoints={{
                        550: {
                           slidesPerView: 1,
                        },
                        768: {
                           slidesPerView: 2,
                        },
                        992: {
                           slidesPerView: 3,
                        },
                        1200: {
                           slidesPerView: 4,
                        },
                     }}
                     navigation={{ nextEl: '.service-button-next', prevEl: '.service-button-prev', }}
                     // onSlideChange={() => console.log('slide change')}
                     // onSwiper={(swiper) => console.log(swiper)}
                  >
                     <SwiperSlide>
                        <AboutServiceItem servicer_img="1" name="Rose Dawson" title="Kitchen Cleaner" />
                     </SwiperSlide>

                     <SwiperSlide>
                        <AboutServiceItem servicer_img="2" name="Stuart Broad" title="House Cleaner" />
                     </SwiperSlide>

                     <SwiperSlide>
                        <AboutServiceItem servicer_img="3" name="Shane Watson" title="Office Cleaner" />
                     </SwiperSlide>

                     <SwiperSlide>
                        <AboutServiceItem servicer_img="4" name="Georgia Melinda" title="Office Cleaner" />
                     </SwiperSlide>

                     <SwiperSlide>
                        <AboutServiceItem servicer_img="1" name="Georgia Mishel" title="Kitchen Cleaner" />
                     </SwiperSlide>

                   <div className="swiper-service-pagination slide-dots"></div>
                  </Swiper>
               </div>
            </div>
         </section>
      </>
   );
};

export default AboutServices;