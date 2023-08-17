import React from "react";

function Contactpage() {
  return (
    <div className="bg-[#EFF4FF] w-full h-full">
      <h1 className="text-[#002060] text-[1.875rem] font-bold leading-normal text-left mt-4 ml-4">
        MasterMaths
      </h1>
      <h2 className="text-center font-bold text-[2.5rem] text-[#002060] font-[Manrope] leading-10 mt-10 ">
        Contact Information
      </h2>
      <svg
        className="absolute right-10"
        xmlns="http://www.w3.org/2000/svg"
        width="55"
        height="21"
        viewBox="0 0 55 21"
        fill="none"
      >
        <path
          d="M53.52 1.77777L48.2718 8.68747L43.0188 1.77777L37.7659 8.68747L32.5177 1.77777L27.2647 8.68747L22.0165 1.77777L16.7588 8.68747L11.5106 1.77777L6.25296 8.68747L1.00002 1.77777"
          stroke="#F24E3D"
          stroke-opacity="0.4"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M53.52 11.9062L48.2718 18.8159L43.0188 11.9062L37.7659 18.8159L32.5177 11.9062L27.2647 18.8159L22.0165 11.9062L16.7588 18.8159L11.5106 11.9062L6.25296 18.8159L1.00002 11.9062"
          stroke="#F24E3D"
          stroke-opacity="0.4"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
      <div className="w-[63.125rem] h-[47.1875rem] border-2 mt-4  m-auto rounded-[0.325rem] bg-[#e3e0e0] shadow-md shadow-[#0000000d] ">
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
      <svg
        className="absolute bottom-0 -ml-4"
        xmlns="http://www.w3.org/2000/svg"
        width="78"
        height="114"
        viewBox="0 0 78 114"
        fill="none"
      >
        <path
          d="M17.2099 4.29C17.2099 6.66111 15.6399 8.58 13.6999 8.58C11.7599 8.58 10.1899 6.66111 10.1899 4.29C10.1899 1.91889 11.7599 0 13.6999 0C15.6399 0 17.2099 1.91889 17.2099 4.29Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M47.3901 4.29C47.3901 6.66111 45.8201 8.58 43.8801 8.58C41.9401 8.58 40.3701 6.66111 40.3701 4.29C40.3701 1.91889 41.9401 0 43.8801 0C45.8201 0 47.3901 1.91889 47.3901 4.29Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M77.5801 4.29C77.5801 6.66111 76.0101 8.58 74.0701 8.58C72.1301 8.58 70.5601 6.66111 70.5601 4.29C70.5601 1.91889 72.1301 0 74.0701 0C76.0101 0 77.5801 1.91889 77.5801 4.29Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M17.2099 39.2822C17.2099 41.6533 15.6399 43.5722 13.6999 43.5722C11.7599 43.5722 10.1899 41.6533 10.1899 39.2822C10.1899 36.9111 11.7599 34.9922 13.6999 34.9922C15.6399 34.9922 17.2099 36.9111 17.2099 39.2822Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M47.3901 39.2822C47.3901 41.6533 45.8201 43.5722 43.8801 43.5722C41.9401 43.5722 40.3701 41.6533 40.3701 39.2822C40.3701 36.9111 41.9401 34.9922 43.8801 34.9922C45.8201 34.9922 47.3901 36.9111 47.3901 39.2822Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M77.5801 39.2822C77.5801 41.6533 76.0101 43.5722 74.0701 43.5722C72.1301 43.5722 70.5601 41.6533 70.5601 39.2822C70.5601 36.9111 72.1301 34.9922 74.0701 34.9922C76.0101 34.9922 77.5801 36.9111 77.5801 39.2822Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M17.2099 74.2745C17.2099 76.6456 15.6399 78.5645 13.6999 78.5645C11.7599 78.5645 10.1899 76.6456 10.1899 74.2745C10.1899 71.9034 11.7599 69.9845 13.6999 69.9845C15.6399 69.9845 17.2099 71.9034 17.2099 74.2745Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M47.3901 74.2745C47.3901 76.6456 45.8201 78.5645 43.8801 78.5645C41.9401 78.5645 40.3701 76.6456 40.3701 74.2745C40.3701 71.9034 41.9401 69.9845 43.8801 69.9845C45.8201 69.9845 47.3901 71.9034 47.3901 74.2745Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M77.5801 74.2745C77.5801 76.6456 76.0101 78.5645 74.0701 78.5645C72.1301 78.5645 70.5601 76.6456 70.5601 74.2745C70.5601 71.9034 72.1301 69.9845 74.0701 69.9845C76.0101 69.9845 77.5801 71.9034 77.5801 74.2745Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M17.2099 109.254C17.2099 111.626 15.6399 113.544 13.6999 113.544C11.7599 113.544 10.1899 111.626 10.1899 109.254C10.1899 106.883 11.7599 104.964 13.6999 104.964C15.6399 104.964 17.2099 106.883 17.2099 109.254Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M47.3901 109.254C47.3901 111.626 45.8201 113.544 43.8801 113.544C41.9401 113.544 40.3701 111.626 40.3701 109.254C40.3701 106.883 41.9401 104.964 43.8801 104.964C45.8201 104.964 47.3901 106.883 47.3901 109.254Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M77.5801 109.254C77.5801 111.626 76.0101 113.544 74.0701 113.544C72.1301 113.544 70.5601 111.626 70.5601 109.254C70.5601 106.883 72.1301 104.964 74.0701 104.964C76.0101 104.964 77.5801 106.883 77.5801 109.254Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
      </svg>
    </div>
  );
}

export default Contactpage;
