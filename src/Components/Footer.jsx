import React from "react";

function Footer() {
  return (
    <div className="">
      <div className="w-full z-0 h-[22rem] text-center relative ">
        <img
          src="https://i.postimg.cc/MTdrgxvP/rectangle-2.png"
          alt="rectangle"
          className="mix-blend-lighten absolute bg-blend-exclusion bg-repeat bg-[#FF6600] w-full h-full "
        />
        <h2 className="ml-[26rem] mt-[3.1rem] font-bold leading-7 absolute text-[2.5rem] text-[#fff] ">
          Course Amount : SGD197 per month*
        </h2>
        <p className="text-[#3F3F3F]  mt-[6.31rem] ml-[36rem] absolute text-left text-[1rem] font-bold leading-7 font-[Manrope] capitalize">
          *materials/deposit/registration fees : SGD 0
        </p>
        <p className="text-[#3F3F3F] mt-[9.31rem] absolute ml-[23rem] text-left text-[1rem] font-bold leading-7 font-[Manrope] capitalize">
          *course fees are a flat monthly fees for 4 lessons. Should there be a
          5th session, it will be provided complimentary.
        </p>
      </div>
      <div className="z-20 absolute mt-[-8rem]">
        <button className="bg-[#0E2d69]  ml-[38rem]  text-white w-[16rem] h-[3.6875rem] rounded-[0.1875rem] border-2 border-[#0E2D69] text-center ">
          Register Today
        </button>
      </div>
      <footer className="bg-[#002060] text-center text-[1rem]  text-[#fff] font-normal leading-6 tracking-wider  h-[4rem] pt-[1rem]">
        Copyrights @ 2023 MasterMaths | All Rights Reserved
      </footer>
    </div>
  );
}

export default Footer;
