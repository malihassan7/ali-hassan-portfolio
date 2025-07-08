import React from "react";

const TradeMarqueeSection = () => {
  const handleSvgClick = () => {
    const homeSection = document.getElementById("home");
    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      className="trade-marquee-area modern-grid-bg h-1/2 w-full flex justify-center items-center"
      style={{ background: "none" }}
    >
      <div className="marquee-text-area w-full flex flex-col justify-center items-center relative">
        <div className="custom-marquee marquee-left" style={{ height: "220px", width: "100%", overflow: "hidden", whiteSpace: "nowrap", position: "relative" }}>
          <div className="marquee-content " style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            animation: "marquee-left 100s linear infinite"
          }}>
            <h1 className="text-[150px] font-bold text-gray-200">ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN x ALI HASSAN 
            </h1>
          </div>
        </div>
        <svg
          width="201"
          height="201"
          viewBox="0 0 201 201"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="rotating-image absolute hover:cursor-pointer hover:-rotate-45 transition-transform duration-500 ease-in-out"
          onClick={handleSvgClick}
        >
          <rect
            width="175.728"
            height="30.8537"
            transform="matrix(-1 0 0 1 200.009 1.12775)"
            fill="#mak"
          ></rect>
          <rect
            width="175.728"
            height="30.8537"
            transform="matrix(-1 0 0 1 200.009 1.12775)"
            fill="#3576DF"
          ></rect>
          <path
            d="M169.169 1.12775L169.169 176.856L200.024 176.856L200.024 1.12775L169.169 1.12775Z"
            fill="#3576DF"
          ></path>
          <path
            d="M169.169 1.12775L169.169 176.856L200.024 176.856L200.024 1.12775L169.169 1.12775Z"
            fill="#3576DF"
          ></path>
          <rect
            x="0.0132751"
            y="179.115"
            width="251.903"
            height="30.9395"
            transform="rotate(-45 0.0132751 179.115)"
            fill="#3576DF"
          ></rect>
          <rect
            x="0.0132751"
            y="179.115"
            width="251.903"
            height="30.9395"
            transform="rotate(-45 0.0132751 179.115)"
            fill="#3576DF"
          ></rect>
        </svg>
        <div className="custom-marquee marquee-right" style={{ height: "225px", width: "100%", overflow: "hidden", whiteSpace: "nowrap", position: "relative" }}>
          <div className="marquee-content" style={{
            display: "inline-block",
            whiteSpace: "nowrap",
            animation: "marquee-right 600s linear infinite"
          }}>
            <h1 className="text-[145px] font-bold text-gray-200">
              Full Stack Engineering x MERN Stack x JavaScript x PHP x Laravel x React x Node.js x Express x MongoDB x Next.js x Tailwind CSS x Bootstrap x Redux Toolkit x Git x GitHub x RESTful APIs x Web Development x Problem Solving x Team Collaboration x Continuous Learning
              Full Stack Engineering x MERN Stack x JavaScript x PHP x Laravel x React x Node.js x Express x MongoDB x Next.js x Tailwind CSS x Bootstrap x Redux Toolkit x Git x GitHub x RESTful APIs x Web Development x Problem Solving x Team Collaboration x Continuous Learning
              Full Stack Engineering x MERN Stack x JavaScript x PHP x Laravel x React x Node.js x Express x MongoDB x Next.js x Tailwind CSS x Bootstrap x Redux Toolkit x Git x GitHub x RESTful APIs x Web Development x Problem Solving x Team Collaboration x Continuous Learning
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradeMarqueeSection;