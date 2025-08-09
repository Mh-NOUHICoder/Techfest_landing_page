import React from 'react';
import Satya from '../assets/images/Profiles/Satya Nadella.jpg';
import NATALIE from '../assets/images/Profiles/natalie.jpg';
import EloneMusk from '../assets/images/Profiles/eloneMusk.jpg';
import Sundar from '../assets/images/Profiles/Sundar Pichai.jpg';
import Sheryl from '../assets/images/Profiles/Sheryl Sandberg1.jpg';

const Speakers = [
  {
    name: 'Elon Musk',
    title: 'CEO ',
    company: 'SpaceX, Tesla',
    bio: 'Innovative entrepreneur revolutionizing space and EV tech.',
    image: `${EloneMusk}`,
  },
  {
    name: 'Sundar Pichai',
    title: 'CEO ',
    company: 'Google',
    bio: 'Renowned technology executive and business leader.',
    image: `${Sundar}`
  },
  {
    name: 'Satya Nadella',
    title: 'CEO ',
    company: 'Microsoft',
    bio: 'Global innovator in cloud computing and AI solutions.',
    image: `${Satya}`,
  },
  {
    name: 'Sheryl Sandberg',
    title: 'Former COO ',
    company: 'Facebook',
    bio: 'Leads global operations at Meta, fostering growth and inclusivity.',
    image: `${Sheryl}`,
  },
  
];

function SpeakerProfiles({ speaker }) {
  return (
    <div className="group relative rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105 bg-white backdrop-blur-sm">
      <img src={speaker.image} alt={speaker.name} className="object-cover w-full h-72 rounded-xl" />
      
      {/* Hidden overlay */}
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white backdrop-blur-sm bg-indigo-500/50 rounded-xl opacity-0 group-hover:opacity-100 transition duration-5000">
        {/* Details */}
        <div className="transition duration-300 ease-in-out transform translate-y-full group-hover:translate-y-0">
          <p className="text-md font-semibold">{speaker.title}</p>
          <p className="text-sm">{speaker.company}</p>
          <div className="px-4 py-2 text-white rounded-xl text-sm">{speaker.bio}</div>
        </div>
      </div>
      
      {/* Visible title */}
      <h2 className="absolute bottom-4 left-4 font-bold text-xl mb-2 text-white">{speaker.name}</h2>
    </div>
  );
}

function SpeakersGrid() {
  return (
    <div className='px-6 py-6 min-h-[65vh] flex flex-wrap justify-center items-center mx-auto space-y-2 bg-gradient-to-br from-indigo-100 via-purple-50 to-blue-100 rounded-lg'>
      <h1 id="speakers" className='text-4xl pb-10 text-indigo-900 font-semibold text-center'>🌟 Featured Speakers 🌟</h1>
      <div className='flex lg:flex-nowrap flex-wrap justify-center'>
        {Speakers.map((speaker, index) => (
          <div key={index} className='w-full md:w-1/2 xl:w-1/3 px-4 mb-8'>
            <SpeakerProfiles speaker={speaker} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default SpeakersGrid;