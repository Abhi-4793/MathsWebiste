import React from "react";

function FourthPage() {
  return (
    <div className="flex-row m-auto items-center w-[90rem] mt-[5rem] text-center h-[51.813rem]">
      <div className="absolute flex-1 items-center leading-7 h-[40rem] ml-9 w-[20rem]">
        <div className="relative ml-8 ">
          <img src="images/ellipse-3.svg" alt="ellipse" />
          <img
            src="images/frame.svg"
            alt="frame"
            className="items-center absolute top-[5rem] ml-[5.5rem]"
          />
        </div>
        <h3 className="mb-3 text-[1.25rem] font-[Manrope] text-[#F60] font-medium">
          Little India (Central)
        </h3>
        <p className="tracking-normal font-[Manrope]">
          2 mins walk from Hilton Garden Inn Hotel, 672A Klang Lane #01-97
          Singapore 211672. 5 mins walk from Little India mrt Exit E, along
          Serangoon Road. Online learning option is available for all
          MasterMaths classes.
        </p>
      </div>
      <div className="absolute items-center leading-7 h-[40rem] w-[20rem] ml-[35rem]">
        <div className="relative  ml-8">
          <img alt="ellipse" className="" src="images/ellipse-3.svg" />
          <img
            src="images/frame.svg"
            alt="frame"
            className="items-center absolute top-[5rem] ml-[5.5rem]"
          />
        </div>
        <h3 className="mb-3 font-[Manrope] text-[1.25rem] text-[#F60] font-medium">
          Tampines (East)
        </h3>
        <p className="tracking-normal font-[Manrope]">
          Tampines N2 Shopping Street, 5 mins walk from Tampines East MRT, 201E
          Tampines St. 23, #01-120 (2nd Storey enter from backgate stairs)
        </p>
      </div>
      <div className="absolute items-center leading-7 h-[40rem] w-[20rem] ml-[70rem]">
        <div className="relative ml-8">
          <img src="images/ellipse-3.svg" alt="ellipse" />
          <img
            src="images/frame.svg"
            alt="frame"
            className="items-center absolute top-[5rem] ml-[5.5rem]"
          />
        </div>
        <h3 className="mb-3 font-[Manrope] text-[1.25rem] text-[#F60] font-medium ">
          Woodlands (North)
        </h3>
        <p className="tracking-normal font-[Manrope]">
          791 Woodlands Ave 6 #01-603, S(730791), 5 mins walk from Admiralty MRT
          All MasterMaths Coaches are NTU/NUS Grads/NIE-Trained/Maths
          Grad/Experienced Coaches with at least 5 years of Coaching Experience.
        </p>
      </div>
      <div className=" absolute text-center ml-[37rem] border-2 w-[16rem] h-[3.6875rem] rounded-[0.1875rem] mt-[30rem]  border-[#f60] text-[#FFF] bg-[#f60]">
        <button className="w-full h-full font-[Manrope] text-[1rem]">
          Secure a Seat
        </button>
      </div>
    </div>
  );
}

export default FourthPage;
