import React from "react";

function Contactpage() {
  return (
    <div>
      <h1 className="text-[#002060] text-[1.875rem] font-bold leading-normal text-left mt-4 ml-4">
        MasterMaths
      </h1>
      <h2 className="text-center font-bold text-[2.5rem] text-[#002060] font-[Manrope] leading-10 mt-10 ">
        Contact Information
      </h2>
      <div className="w-[63.125rem] h-[47.1875rem] border-2 mt-4  m-auto rounded-[0.325rem] bg-[#fff] shadow-md shadow-[#0000000d] ">
        <h2 className="text-[#0e2d69] mt-2 mb-4 text-center  text-[1.75rem] font-bold">
          Parent's Detail
        </h2>
        <form>
          <div className="flex flex-wrap m-auto">
            <input
              type="text"
              placeholder="Your first name"
              className="border-[1px] pl-4 hover:border-[#5daaee] mb-10 flex-shrink rounded-[0.1875rem] m-auto ml- shadow-md shadow-gray-500 border-[#73A3cd] w-[28.125rem] h-[3.125rem] text-left  bg-[#fff] "
              required
            />
            <input
              type="text"
              placeholder="Your last name"
              className="border-[1px] mb-10 pl-4 flex-shrink rounded-[0.1875rem] m-auto ml- shadow-md shadow-gray-500 border-[#73A3cd] w-[28.125rem] h-[3.125rem] text-left  bg-[#fff]"
              required
            />
            <input
              type="email"
              placeholder="Your email address"
              className="border-[1px] mb-10 pl-4 flex-shrink rounded-[0.1875rem] m-auto ml- shadow-md shadow-gray-500 border-[#73A3cd] w-[28.125rem] h-[3.125rem] text-left  bg-[#fff]"
              required
            />
            <input
              type="number"
              placeholder="Phone no"
              className=" border-[1px] mb-10 pl-4 flex-shrink rounded-[0.1875rem] m-auto ml- shadow-md shadow-gray-500 border-[#73A3cd] w-[28.125rem] h-[3.125rem] text-left  bg-[#fff]"
              required
            />
            <input
              type="text"
              placeholder="Your child's first name"
              className="border-[1px] mb-10 pl-4 flex-shrink rounded-[0.1875rem] m-auto ml- shadow-md shadow-gray-500 border-[#73A3cd] w-[28.125rem] h-[3.125rem] text-left  bg-[#fff]"
              required
            />
            <input
              type="text"
              placeholder="Your child's last name"
              className="border-[1px] mb-10 pl-4 flex-shrink rounded-[0.1875rem] m-auto ml- shadow-md shadow-gray-500 border-[#73A3cd] w-[28.125rem] h-[3.125rem] text-left  bg-[#fff]"
            />
            <input
              type="country"
              placeholder="country"
              className="border-[1px] mb-10 pl-4 flex-shrink rounded-[0.1875rem] m-auto ml- shadow-md shadow-gray-500 border-[#73A3cd] w-[28.125rem] h-[3.125rem] text-left  bg-[#fff]"
            />
            <input
              type="text"
              placeholder="State/region"
              className="border-[1px] mb-10 pl-4 flex-shrink rounded-[0.1875rem] m-auto ml- shadow-md shadow-gray-500 border-[#73A3cd] w-[28.125rem] h-[3.125rem] text-left  bg-[#fff] "
            />
            <input
              type="text"
              placeholder="Street address"
              className="border-[1px] mb-10 pl-4 flex-shrink rounded-[0.1875rem] m-auto ml- shadow-md shadow-gray-500 border-[#73A3cd] w-[60.125rem] h-[3.125rem] text-left  bg-[#fff] "
              required
            />
            <input
              type="text"
              placeholder="Your city"
              className="border-[1px] mb-10 pl-4 flex-shrink rounded-[0.1875rem] m-auto ml- shadow-md shadow-gray-500 border-[#73A3cd] w-[28.125rem] h-[3.125rem] text-left  bg-[#fff]"
            />
            <input
              type="number"
              placeholder="Zip"
              className="border-[1px] mb-10 pl-4 flex-shrink rounded-[0.1875rem] m-auto ml- shadow-md shadow-gray-500 border-[#73A3cd] w-[28.125rem] h-[3.125rem] text-left  bg-[#fff] "
              required
            />
            <div className="flex items-start ml-6 mb-6">
              <div className="flex items-center h-5">
                <input
                  type="checkbox"
                  value=""
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                  required
                />
              </div>
              <label className="ml-2 text-sm  font-medium text-[#1C588C]">
                I agree to the{" "}
                <span className="text-[#f60]">terms and conditions</span>
              </label>
            </div>
            <div className=" absolute text-center  border-2 w-[16rem] h-[3.6875rem] rounded-[0.1875rem] mt-[39rem] ml-[23rem]  border-[#f60] text-[#FFF] bg-[#f60]">
              <button className="w-full h-full font-[Manrope] text-[1rem]">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contactpage;
