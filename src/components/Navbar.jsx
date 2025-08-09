// import { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="backdrop-blur bg-white shadow  fixed  w-full  justify-between   z-10 motion-translate-x-in-[0%] motion-translate-y-in-[-25%] motion-opacity-in-[0%] motion-duration-[3s] motion-delay-[2s] motion-duration-[420ms]/translate motion-delay-[0ms]/translate motion-duration-[420ms]/opacity motion-delay-[0ms]/opacity motion-ease-bounce">
//       <div className="container px-6 py-4 mx-auto">
//         <div className="lg:flex lg:items-center">
//           <div className="flex items-center justify-between">
//             <a href="#">
//               <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="Logo" />
//             </a>

//             {/* Mobile menu button */}
//             <div className="flex lg:hidden">
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 type="button"
//                 className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
//                 aria-label="toggle menu"
//               >
//                 {!isOpen ? (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
//                   </svg>
//                 ) : (
//                   <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
//                     <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>

//           <div
//             className={`${
//               isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-48'
//             } absolute inset-x-0 z-0 flex-1 w-full px-6 py-4 transition-all duration-300 ease-in-out backdrop-blur bg-white/50  lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:bg-transparent lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex lg:items-center lg:justify-between`}
//           >
//             <div className="flex flex-col text-gray-600 font-semibold capitalize dark:text-black lg:flex lg:px-16 lg:-mx-4 lg:flex-row lg:items-center">
//               <a href="#hero" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">
//                 Home
//               </a>
//               <a href="#about" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">
//                 About
//               </a>
//               <a href="#speakers" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">
//                 Speakers
//               </a>
//               <a href="#agenda" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">
//                 agenda
//               </a>
//               <a href="#resgister" className="mt-2 transition-colors duration-300 transform lg:mt-0 lg:mx-4 hover:text-gray-900 dark:hover:text-gray-200">
//                 Register
//               </a>

//               <button className='bg-blue-600 w-36  h-8  mt-4 lg:mt-0 rounded-lg  ring-white/75 focus:ring-1 hover:bg-blue-800'>
//                 Register</button>
              
//             </div>

            
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
