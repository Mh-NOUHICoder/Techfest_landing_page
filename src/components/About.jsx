import React from 'react';
import CLOUD from '../assets/images/cloud.jpg'
import AI from '../assets/images/ai.jpg';
import LAUNCH from '../assets/images/launch.jpg'

function About() {
  const Items = [
    {
      title: "AI",
      category: "Website",
      image:`${AI}`,
        
    },
    {
      title: "CLOUD",
      category: "UI Kit",
      image:`${CLOUD}`,
    },
    {
      title: "Launch",
      category: "Mockups",
      image:`${LAUNCH}`,
    },
  ];

  return (
    <>
      

      <div className=" ">
        <div className=" px-6 py-10 mx-auto">
        <div className="container mx-auto p-4  space-x-2 space-y-4">
        <h2 className=" text-2xl text-white font-semibold font-sans">Why Attend?</h2>
        <p className="font-medium text-white/75 lg:w-[60vw]">
          TechFest 2024 is the ultimate gathering for innovators, tech
          enthusiasts, and industry leaders. Experience cutting-edge workshops,
          inspiring keynotes, and unparalleled networking opportunities.
        </p>
      </div>
          <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
            {Items.map((item, index) => (
              <div
                key={index}
                className="overflow-visible object-cover  w-50 bg-cover rounded-lg cursor-pointer h-96 group"
                style={{ backgroundImage: `url(${item.image})` }}
              >
                <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 rounded-lg group-hover:opacity-100">
                  <h2 className="mt-4 text-xl font-semibold text-white capitalize">
                    {item.title}
                  </h2>
                  <p className="mt-2 text-lg tracking-wider text-blue-400 uppercase">
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
