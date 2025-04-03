'use client'
import '@/app/globals.css';
import { useState } from 'react';
import Navbar from "@/components/Navbar";
import AboutUs from '@/components/AboutUs';
import TypingText from "@/components/TypingText";

export default function Page() {
  const [showInitialContent, setShowInitialContent] = useState(true);
  const [showNextContent, setShowNextContent] = useState(false);
  const [showApiDiv, setShowApiDiv] = useState(false);
  const [showAboutUs, setShowAboutUs] = useState(false);
  const [apiUrl, setApiUrl] = useState("api/lore");
  const [jsonData, setJsonData] = useState<{error: string} | null>(null);
  
  const HandleProceedClick = () => {
    setShowInitialContent(false);
    setShowAboutUs(false);
    setShowNextContent(false);
    setTimeout(() => setShowApiDiv(true), 400);
  };
  const HandleAdminClick = () => {
    setShowInitialContent(false);
    setShowAboutUs(false);
    setShowApiDiv(false);
    setTimeout(() => setShowNextContent(true), 400);
  };

  const handleLogoClick = () => {
    setShowApiDiv(false);
    setShowNextContent(false);
    setShowAboutUs(false);
    setTimeout(() => setShowInitialContent(true), 400);
  }

  const handleGetStarted = () => {
    setShowNextContent(false);
    setShowInitialContent(false);
    setShowAboutUs(false);
    setTimeout(() => setShowApiDiv(true), 400);
  };

  const handleAboutUsClick = () => {
    setShowNextContent(false);
    setShowInitialContent(false);
    setShowApiDiv(false);
    setTimeout(() => setShowAboutUs(true), 400);
  };

  const handleSearch = async () => {
    if (!apiUrl.trim()) return;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setJsonData(data);
    } catch {
      setJsonData({ "error": "Invalid API or network error." } );
    }
  };

  return (
    <div className="min-h-screen text-white font-nova">
      {/* Navbar */}
      <Navbar
       onAdminClick={HandleAdminClick}
       onAPIClick={handleGetStarted}
       onLogoClick={handleLogoClick}
       onAboutUsClick={handleAboutUsClick}
       />
      
      {/* Wrapping to maintin both the div's in absolute nd show only one at a time */}
      <div className="relative min-h-[90vh]">

        {/* Main Content Initial */}
        <div className={`flex flex-col min-h-[90vh] px-4 absolute inset-0 items-center overflow-hidden transition-opacity duration-300 ${showInitialContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {showInitialContent && (
            <>
              <div className="add-img"></div>
              
              {/* Container for Seath and polygon */}
              <div className="flex items-end w-full relative md:w-[90%] mt-[8rem] sm:mt-[5rem] md:mt-10">
                {/* Seath Image - positioned at bottom left */}
                <div className="absolute left-[-4rem] md:left-[-6rem] bottom-[-3rem] md:bottom-[-6rem] w-[12rem] sm:w-[14rem] md:w-[16rem] lg:w-[20rem]">
                  <img 
                    src="/seath-2-nbg.png" 
                    alt="Seath the Scaleless"
                  />
                </div>

                {/* Polygon with Text - positioned relative to Seath */}
                <div className="relative border-[#7e714a] w-full max-w-[500px] md:max-w-[750px] h-[300px] md:h-[400px] flex items-center flex-wrap justify-center ml-[20%] mt-[10%] mb-[8%]
                [filter:drop-shadow(0_0_15px_rgba(126,113,74,0.7))]">
                  <svg 
                    width="100%" 
                    height="100%" 
                    viewBox="0 0 750 400" 
                    preserveAspectRatio="none"
                    className="absolute inset-0"
                  >
                    {/* Border (visible stroke) */}
                    <polygon
                      points="140,0 750,0 750,400 140,400 90,336 10,240 140,296"
                      fill="none"
                      stroke="#7e714a"
                      strokeWidth="3"
                    />

                    {/* Clipped background (fill) */}
                    <polygon
                      points="140,0 750,0 750,400 140,400 90,336 10,240 140,296"
                      fill="#30231bcc"
                      clipPath="url(#polygon-clip)"
                    />

                    <defs>
                      <clipPath id="polygon-clip">
                        <polygon points="140,0 1000,0 1000,400 140,400 90,336 10,240 140,296" />
                      </clipPath>
                    </defs>
                  </svg>

                  {/* Text, TypingText introduces typing animation */}
                  <div className="break-after-10-chars pl-16 relative z-10 text-white text-[1.5rem] md:text-[2rem] font-bold text-center">
                    <TypingText 
                      text="The fire fades, but knowledge endures. Access the lore, forge your own path."
                      speed={50} 
                      onComplete={() => document.getElementById('proceed-link')?.classList.remove('opacity-0')}
                    />
                    
                    {/* Proceed link - hidden initially */}
                    <div id="proceed-link" className="opacity-0 transition-opacity duration-500 mt-6">
                      <button onClick={HandleProceedClick}>
                        <TypingText 
                          text="Click to proceed →" 
                          speed={30}
                          className="text-[#f16c05] text-[1rem] md:text-[1.25rem] hover:underline cursor-pointer"
                        />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* Admin About Div */}
        <div className={`flex flex-col items-center justify-center min-h-[90vh] px-4 absolute inset-0 transition-opacity duration-300 ${showNextContent ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {showNextContent && (
            <>
              {/* Adding Image to the bg */}
              <div className="add-img"></div>

              {/* Box which has our sites description */}
              <div className="shadow-gen flex-col items-between justify-center w-full max-w-lg md:max-w-3xl bg-[#30231bab] bg-opacity-40 p-6 md:p-8 border-[#7e714a] border-2 rounded-lg text-center m-6 md:m-[75px]">
                  <h2 className="text-2xl md:text-4xl font-bold">Want to become an Admin?</h2>
                  <hr className="my-4 border-[#7e714a] border-2 w-full" />
                  <p className="text-base md:text-lg text-gray-300">
                  The flames are fading, but legends never die. Will you rise as an Admin, uphold the legacy, and shape the fate of this world?
                  </p>
                  
                  <div className="w-full h-40 md:h-80 mt-6 border-2 border-[#7e714a] rounded-lg">
                    <iframe 
                      className="w-full h-full"
                      src="https://www.youtube.com/embed/o1780AqAa20"
                    ></iframe>
                  </div>
                  
                  <button 
                  onClick={handleAboutUsClick}
                  className="gs-border mt-6 px-4 md:px-6 py-2 md:py-3 bg-[#1e0d02] hover:bg-[#0a0605] text-white text-base md:text-lg rounded-lg
                        transition-all duration-300 transform hover:scale-110">
                    About Us
                  </button>
              </div>
            </>
          )}
        </div>

        {/* API Search Div */}
        <div className={`absolute inset-0 flex flex-col items-center justify-center min-h-[90vh] px-4 transition-opacity duration-300 ${showApiDiv ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
          {showApiDiv && (
            <>
              <div className='add-img'></div>

              <div className="shadow-gen flex flex-col items-center w-full max-w-lg sm:max-w-xl md:max-w-3xl bg-[#30231b8b] bg-opacity-40 p-4 sm:p-6 md:p-8 border-[#7e714a] border-2 rounded-lg text-center">
                <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">Dark Souls Lore API</h2>
                <hr className="my-4 border-[#7e714a] border-2 w-full" />

                {/* Div to contain the static + input url */}
                <div className='flex items-center w-full'>
                  <div className='pl-2 whitespace-nowrap sm:flex-grow py-2 break border-[#7e714a] border-t-2 border-l-2 border-b-2 bg-[#ff00fff] text-white text-sm sm:text-base md:text-lg'>
                    <p>https://dsapi.abhinavpant.tech/</p>
                  </div>
                  <input
                    type="text"
                    placeholder="Enter API URL..."
                    value={apiUrl}
                    onChange={(e) => setApiUrl(e.target.value)}
                    className="w-full sm:flex-grow px-0 py-2 text-white border-[#7e714a] border-t-2 border-r-2 border-b-2 bg-[#30231bab] text-sm sm:text-base md:text-lg"
                  />
                </div>

                <a 
                  href={`https://dsapi.abhinavpant.tech/${apiUrl}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mt-2 text-white text-sm sm:text-base md:text-lg underline hover:text-[#f16c05] transition"
                >
                  {`https://dsapi.abhinavpant.tech/${apiUrl}`}
                </a>

                <button onClick={handleSearch}
                className="gs-border mt-4 px-4 py-2 bg-[#1e0d02] hover:bg-[#0a0605] text-white text-base md:text-lg rounded-lg
                          transition-all duration-300 transform hover:scale-110">
                  Search
                </button>
                <div className="w-full h-40 md:h-80 flex justify-start items-start bg-black mt-6 border-2 border-[#7e714a] rounded-lg p-4 overflow-auto text-white">
                  <pre className="whitespace-pre-wrap break-all text-left">{jsonData ? JSON.stringify(jsonData, null, 2) : "API response will appear here..."}</pre>
                </div>
              </div>
            </>
          )}
        </div>

        {/* About Us Div */}
        <div className={`absolute inset-0 transition-opacity duration-300 ${showAboutUs ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
          {showAboutUs && <AboutUs />}
        </div>
      </div>
    </div>
  );
}