import React from "react";
import Primary1 from "./primary/Primary1";
import Primary2 from "./primary/Primary2";
import Primary3 from "./primary/Primary3";

function ThirdPage() {
  const tagLine: string = "[Online or Tampines, MasterMaths Coach]";
  return (
    <div className="bg-[#EFF4FF] w-full h-full">
      <h1 className="w-[18.0625]  h-[1.8125rem] text-center text-[#002060] text-[2.5rem] mt-[-2rem] font-bold leading-10 mb-5 font-[Manrope] ">
        2023 Schedule
      </h1>
      <svg
        className="absolute right-0 mr-6"
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="18"
        viewBox="0 0 55 18"
        fill="none"
      >
        <path
          d="M53.52 2L48.2718 7.65339L43.0188 2L37.7659 7.65339L32.5177 2L27.2647 7.65339L22.0165 2L16.7588 7.65339L11.5106 2L6.25296 7.65339L1.00002 2"
          stroke="#F24E3D"
          stroke-opacity="0.4"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M53.52 10.287L48.2718 15.9404L43.0188 10.287L37.7659 15.9404L32.5177 10.287L27.2647 15.9404L22.0165 10.287L16.7588 15.9404L11.5106 10.287L6.25296 15.9404L1.00002 10.287"
          stroke="#F24E3D"
          stroke-opacity="0.4"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
      <svg
        className="absolute ml-[7.5rem] mt-[-5rem]"
        xmlns="http://www.w3.org/2000/svg"
        width="229"
        height="229"
        viewBox="0 0 229 229"
        fill="none"
      >
        <path
          opacity="0.109"
          d="M114.5 229C177.737 229 229 177.737 229 114.5C229 51.2634 177.737 0 114.5 0C51.2633 0 0 51.2634 0 114.5C0 177.737 51.2633 229 114.5 229Z"
          fill="#0E2D69"
        />
      </svg>
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
      <svg
        className="absolute mt-[-4rem]"
        xmlns="http://www.w3.org/2000/svg"
        width="77"
        height="93"
        viewBox="0 0 77 93"
        fill="none"
      >
        <path
          d="M16.2099 3.51C16.2099 5.45 14.6399 7.02 12.6999 7.02C10.7599 7.02 9.18994 5.45 9.18994 3.51C9.18994 1.57 10.7599 0 12.6999 0C14.6399 0 16.2099 1.57 16.2099 3.51Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M46.39 3.51C46.39 5.45 44.82 7.02 42.88 7.02C40.94 7.02 39.37 5.45 39.37 3.51C39.37 1.57 40.94 0 42.88 0C44.82 0 46.39 1.57 46.39 3.51Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M76.58 3.51C76.58 5.45 75.01 7.02 73.07 7.02C71.13 7.02 69.56 5.45 69.56 3.51C69.56 1.57 71.13 0 73.07 0C75.01 0 76.58 1.57 76.58 3.51Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M16.2099 32.1399C16.2099 34.0799 14.6399 35.6499 12.6999 35.6499C10.7599 35.6499 9.18994 34.0799 9.18994 32.1399C9.18994 30.1999 10.7599 28.6299 12.6999 28.6299C14.6399 28.6299 16.2099 30.1999 16.2099 32.1399Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M46.39 32.1399C46.39 34.0799 44.82 35.6499 42.88 35.6499C40.94 35.6499 39.37 34.0799 39.37 32.1399C39.37 30.1999 40.94 28.6299 42.88 28.6299C44.82 28.6299 46.39 30.1999 46.39 32.1399Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M76.58 32.1399C76.58 34.0799 75.01 35.6499 73.07 35.6499C71.13 35.6499 69.56 34.0799 69.56 32.1399C69.56 30.1999 71.13 28.6299 73.07 28.6299C75.01 28.6299 76.58 30.1999 76.58 32.1399Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M16.2099 60.77C16.2099 62.71 14.6399 64.28 12.6999 64.28C10.7599 64.28 9.18994 62.71 9.18994 60.77C9.18994 58.83 10.7599 57.26 12.6999 57.26C14.6399 57.26 16.2099 58.83 16.2099 60.77Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M46.39 60.77C46.39 62.71 44.82 64.28 42.88 64.28C40.94 64.28 39.37 62.71 39.37 60.77C39.37 58.83 40.94 57.26 42.88 57.26C44.82 57.26 46.39 58.83 46.39 60.77Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M76.58 60.77C76.58 62.71 75.01 64.28 73.07 64.28C71.13 64.28 69.56 62.71 69.56 60.77C69.56 58.83 71.13 57.26 73.07 57.26C75.01 57.26 76.58 58.83 76.58 60.77Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M16.2099 89.3899C16.2099 91.3299 14.6399 92.8999 12.6999 92.8999C10.7599 92.8999 9.18994 91.3299 9.18994 89.3899C9.18994 87.4499 10.7599 85.8799 12.6999 85.8799C14.6399 85.8799 16.2099 87.4499 16.2099 89.3899Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M46.39 89.3899C46.39 91.3299 44.82 92.8999 42.88 92.8999C40.94 92.8999 39.37 91.3299 39.37 89.3899C39.37 87.4499 40.94 85.8799 42.88 85.8799C44.82 85.8799 46.39 87.4499 46.39 89.3899Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M76.58 89.3899C76.58 91.3299 75.01 92.8999 73.07 92.8999C71.13 92.8999 69.56 91.3299 69.56 89.3899C69.56 87.4499 71.13 85.8799 73.07 85.8799C75.01 85.8799 76.58 87.4499 76.58 89.3899Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
      </svg>
    </div>
  );
}

export default ThirdPage;
