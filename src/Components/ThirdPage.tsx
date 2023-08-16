import React from "react";
import Primary1 from "./primary/Primary1";
import Primary2 from "./primary/Primary2";
import Primary3 from "./primary/Primary3";

function ThirdPage() {
  const tagLine: string = "[Online or Tampines, MasterMaths Coach]";
  return (
    <div>
      <h1 className="w-[18.0625]  h-[1.8125rem] text-center text-[#002060] text-[2.5rem] mt-[-2rem] font-bold leading-10 mb-5 font-[Manrope] ">
        2023 Schedule
      </h1>
      <div className="w-[69.375rem] relative border-collapse h-[51.25rem] border-2 rounded-[0.3125rem] bg-[#fff] border-gray-400 shadow-2xl shadow-[#0000000d] m-auto ">
        <div className="w-full border h-[3.9375rem] border-collapse border-[#8ea7d980] bg-[#f2f4f7]">
          <h3 className="text-[#002060] ml-[1.5rem] mt-2 text-left font-bold m-auto text-[1.125rem] leading-10">
            Classes for Year 2023
          </h3>
          <h3 className="text-[#002060]  text-right -mt-10 mr-14 font-bold text-[1.125rem] leading-10">
            Schedule for Woodlands. Little India, Tampines and Live Online
            Classes
          </h3>
        </div>
        <div className=" ml-[20rem] flex justify-between  flex-wrap mt-[0.02rem] pt-[1.5rem] absolute h-[12rem] w-[49.375rem] border-b-2  border-[#8ea7d980]">
          <Primary1 />
        </div>
        <div className=" ml-[20rem] flex justify-between  flex-wrap mt-[12.02rem] pt-[2rem] absolute h-[12rem] w-[49.375rem] border-b-2  border-[#8ea7d980]">
          <Primary2 />
        </div>
        <div className=" ml-[20rem] flex justify-between  flex-wrap mt-[23.9rem] absolute h-[12rem] w-[49.375rem] ">
          <Primary3 />
        </div>
        <div className=" ml-[20rem] flex justify-between  flex-wrap mt-[32.1rem] absolute h-[12rem] w-[49.375rem] ">
          <Primary3 />
        </div>
        <div className=" ml-[20rem] flex justify-between  flex-wrap mt-[40.1rem] absolute h-[7.1rem] w-[49.375rem] border-b-2  border-[#8ea7d980] ">
          <div className="border  border-[#ff660085] rounded-[0.1875rem] w-[14.5625rem] h-[5.875rem] absolute bg-[#ff660012] mt-4 ml-2">
            <div className="m-auto mt-2 font-[Manrope] h-[4.8125] w-[12.875rem]">
              <h3 className="text-[#002060] leading-7 text-[1rem] font-semibold ">
                Saturday 4PM to 5:30PM
              </h3>
              <p className="text-[#797979] font-semibold text-[1rem] leading-7">
                {tagLine}
              </p>
            </div>
          </div>
        </div>

        <div className="   flex-col border-collapse   border-b border-r border-[#8ea7d980] align-middle text-center justify-center h-[47.299rem] w-[20rem]">
          <div className="h-[12rem] text-center w-full text-[1.125rem] text-[#4C8AFF] font-[Manrope] leading-10  pt-[5rem]  border border-[#8ea7d980]">
            Primary1
          </div>
          <div className="h-[12rem] w-full pt-[5rem]  text-[1.125rem] text-[#4C8AFF] font-[Manrope] leading-10 border border-[#8ea7d980]">
            Primary2
          </div>
          <div className="h-[23.27rem] w-full border pt-[8rem] text-[1.125rem] text-[#4C8AFF] font-[Manrope] leading-10 border-r  border-[#8ea7d980] ">
            Primary3
          </div>
        </div>
      </div>
    </div>
  );
}

export default ThirdPage;
