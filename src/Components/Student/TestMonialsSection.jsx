import React from "react";
import { assets, dummyTestimonial } from "../../assets/assets";

const TestMonialsSection = () => {
  return (
    <div className="pb-14 px-8 md:px-0">
      <h2 className="text-3xl font-semibold text-orange-600">Testimonials</h2>
      <p className="md:text-base mt-3 text-gray-800">
        Our learners are at the heart of everything we do. Here's what they have
        to say about their experience with our platform <br />
        real stories, real success, and honest feedback that inspire us to keep
        improving every day.
      </p>
      <div className="sm:flex mx-2 sm:mx-12 gap-8 mt-14 ">
        {dummyTestimonial.map((testimonial, index) => (
          <div key={index} className="text-sm text-left border-1 border-gray-500/30 pb-6 rounded-lg bg-white shadow[0px_4px_15px_0px] shadow-black/5 overflow-hidden  ">
            <div className="flex items-center gap-4 px-5 py-4 bg-gray-500/10">
              <img className="h-20 w-20 rounded-full" src={testimonial.image} alt={testimonial.name} />
              <div>
                <h1 className="text-lg font-medium text-gray-800">{testimonial.name}</h1>
                <p className="text-gray-800/80">{testimonial.role}</p>
              </div>
              
            </div>
            <div className="p-5 pb-7">
                <div className="flex gap-0.5 ">
                  {[
                    ...Array(5).map((_, i) => (
                      <img
                        className="h-5"
                        key={i}
                        src={
                          i < Math.floor(testimonial.rating)
                            ? assets.star
                            : assets.star_blank
                        }
                        alt=""
                      />
                    )),
                  ]}
                <p className="text-gray-700/80 mt-5">{testimonial.feedback}</p>
                </div>
              </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestMonialsSection;
