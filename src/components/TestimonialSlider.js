import React from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
// required module
import { Autoplay, Navigation } from "swiper";
import {  testimonial } from "../data";

const TestimonialSlider = () => {
  return (
    <Swiper 
      className="testimonialSlider"
      modules={[Navigation, Autoplay]}
      navigation={true}
      autoplay={true}
    >
      {testimonial.persons.map((person, index) => {
        //destructure person
        const {avatar, name, occupation, message} = person;
        return (
          <SwiperSlide key={index}>
            <div className="flex flex-col min-h-[250px]">
              <div className="flex items-center  gap-x-5 mb-9">
                {/* image */}
                <img className="" src={avatar.type} alt="" />
                <div>
                  <div className="lg:text-xl font-semibold">{name}</div>
                  <div className="text-gray-500 ">{occupation}</div>
                </div>
              </div>
                {/* message */}
              <div className="lg:text-xl max-w-[570px]">{message}</div>
            </div>
          </SwiperSlide>
        )
      })}
    </Swiper>
  );
};

export default TestimonialSlider;
