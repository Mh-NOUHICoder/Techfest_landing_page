import React, { useState, useEffect } from "react";

function ToggleHooks() {
  const [isVisible, setIsVisible] = useState(true); // Initialize visibility state

  // Log when the component mounts
  useEffect(() => {
    console.log("ToggleHooks: Component mounted");
    return () => {

      console.log("ToggleHooks: Component unmounted");
    };
  }, []);

  // Log when visibility changes
  useEffect(() => {
    console.log(`ToggleHooks: Visibility is now ${isVisible ? "visible" : "hidden"}`);
  }, [isVisible]);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const [isOnline,setIsOnline] = useState("Online")
  const toggleOnline = () => setIsOnline(!isOnline);

  return (
    <div className="flex flex-col justify-between space-x-4 place-items-center">
      <h1>Toggle Visibility (Hooks)</h1>
      {isVisible && <p>Now you see me!</p>}
      <button className="bg-blue-600 w-40 m-2 rounded-md hover:bg-blue-900" onClick={toggleVisibility}>
        {isVisible ? "Hide" : "Show"}
      </button>
      <div className="flex flex-row  font-extrabold space-x-8 mb-5 mt-3">
        <h4>{isOnline && <p className="text-green-600">😊</p>}</h4>
        <h4>{!isOnline && <p className="text-red-600">😴</p>}</h4>
        <div className={isOnline ? "bg-green-600 h-6 w-6 rounded-full" : "bg-red-600 h-6 w-6 rounded-full"} ></div>
        
      </div>
      <button className={!isOnline ? 
      "bg-green-600 w-40 rounded-md hover:bg-green-700 focus:ring-1 focus:ring-white hover:scale-110 focus:scale-105 transition transform duration-500 " :
       "bg-red-600 w-40 rounded-md hover:bg-red-700 focus:ring-1 focus:ring-white hover:scale-110 focus:scale-105 transition transform duration-500"}
       onClick={toggleOnline}>{isOnline ? "Offline" : "Online"}</button>
      
    </div>
  );
}

export default ToggleHooks;
