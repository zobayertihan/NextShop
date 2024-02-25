/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import { RiSingleQuotesL, RiSingleQuotesR } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const Reviews = () => {
  const slider1Class = "testimonials";

  const testimonials = [
    {
      id: 1,
      quote:
        "The Tours In This Website Are Great. I Had Been Really Enjoy With My Family! The Team Is  Very Professional And Taking Care Of The Customers. Will Surely Recommend To My Friend To Join This Company!",
      author: "Emily Smith",
      title: "CEO of LLC",
      image: "https://i.pravatar.cc/100?img=4",
    },
    {
      id: 2,
      quote:
        "The Tours In This Website Are Great. I Had Been Really Enjoy With My Family! The Team Is  Very Professional And Taking Care Of The Customers. Will Surely Recommend To My Friend To Join This Company!",
      author: "Sophia Chen",
      title: "Manager at RedCart",
      image: "https://i.pravatar.cc/100?img=5",
    },
    {
      id: 3,
      quote:
        "The Tours In This Website Are Great. I Had Been Really Enjoy With My Family! The Team Is  Very Professional And Taking Care Of The Customers. Will Surely Recommend To My Friend To Join This Company!",
      author: "Maggie Brown",
      title: "CEO of React",
      image: "https://i.pravatar.cc/100?img=6",
    },
  ];

  return (
    <div className="tw-container">
      <h1 className="text-[#1E1E1E] text-4xl font-bold text-center">
        What customers say about NextShop?
      </h1>
      <section className="max-w-6xl mx-auto">
        <div className="py-12">
          <Swiper
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            slidesPerView={1}
            centeredSlides={true}
            spaceBetween={0}
            navigation={true}
            modules={[Autoplay]}
            loop={true}
            className={`mySwiper ${slider1Class}`}
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <div className="px-5 flex flex-col w-full  mx-auto justify-center items-center">
                  <div className="relative bg-white text-lg text-gray-600 leading-7 rounded-md shadow-lg px-12">
                    <div>
                      <RiSingleQuotesL className="absolute -top-6 -left-5 text-gray-600 text-8xl" />
                      <p className="text-center">{testimonial.quote}</p>
                      <RiSingleQuotesR className="absolute bottom-20 md:top-3 right-0 text-gray-600 text-8xl" />
                    </div>

                    <div className="">
                      <div className="flex justify-center items-center max-w-md p-8">
                        <img
                          className="w-12 h-12 rounded-full mr-4 border"
                          src={testimonial.image}
                          alt={testimonial.author}
                        />
                        <div className="">
                          <p className="text-[#3a4190] mb-1 text-xl font-bold w-[200px]">
                            {testimonial.author}
                          </p>
                          <p className="text-gray-600 w-[200px]">
                            {testimonial.title}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
