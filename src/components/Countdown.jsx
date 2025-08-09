import React, { useState, useEffect } from "react";

function Countdown() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2026-06-15T00:00:00"); // Replace with your target date
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / (1000 * 60)) % 60),
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
<div className="flex flex-col  items-center lg:items-start xl:items-start   bg-transparent text-white mt-16 p-8 md:p-12 lg:p-16">
  <h2 className="text-xl items-center  md:text-lg lg:text-2xl  font-bold uppercase text-indigo-100/75 mb-6">
    Countdown to the Event
  </h2>
  <div className="flex space-x-6 md:space-x-8 lg:space-x-12">
    {/* Days */}
    <div className="flex flex-col items-center bg-purple-900/50 border border-purple-500 rounded-lg p-4 w-24 md:w-32 lg:w-40">
      <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-indigo-100">
        {String(timeLeft.days).padStart(2, "0")}
      </p>
      <p className="text-sm md:text-base lg:text-lg uppercase text-indigo-100/75 mt-2">
        Days
      </p>
    </div>
    {/* Hours */}
    <div className="flex flex-col items-center bg-purple-900/50 border border-purple-500 rounded-lg p-4 w-24 md:w-32 lg:w-40">
      <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-indigo-100">
        {String(timeLeft.hours).padStart(2, "0")}
      </p>
      <p className="text-sm md:text-base lg:text-lg uppercase text-indigo-100/75 mt-2">
        Hours
      </p>
    </div>
    {/* Minutes */}
    <div className="flex flex-col items-center bg-purple-900/50 border border-purple-500 rounded-lg p-4 w-24 md:w-32 lg:w-40">
      <p className="text-3xl md:text-4xl lg:text-6xl font-bold text-indigo-100">
        {String(timeLeft.minutes).padStart(2, "0")}
      </p>
      <p className="text-sm md:text-base lg:text-lg uppercase text-indigo-100/75 mt-2">
        Minutes
      </p>
    </div>
  </div>
</div>

  );
}

export default Countdown;
