import React from "react";

const SecondPage = () => {
  return (
    <div className="flex flex-row w-[90rem] h-[51.813rem] bg-white ">
      <div className="mt-[10rem] ml-[7rem] ">
        <img
          src="images/rectangle-3.png"
          alt="vector"
          className="w-[29.6875rem] h-[33.5675rem]"
        />
      </div>
      <svg
        className="absolute mt-[25rem] ml-[2rem]"
        xmlns="http://www.w3.org/2000/svg"
        width="34"
        height="34"
        viewBox="0 0 34 34"
        fill="none"
      >
        <path
          d="M15.9572 2.13331C24.2189 1.50729 31.4216 7.69532 32.0476 15.9571C32.6736 24.2189 26.4856 31.4215 18.2239 32.0476C9.96209 32.6736 2.7594 26.4856 2.13337 18.2238"
          stroke="#FF6600"
          stroke-opacity="0.46"
          stroke-width="2.5"
          stroke-miterlimit="10"
        />
      </svg>
      <div className="w-[21.6875rem] h-[33.5675rem] pl-20">
        <h2 className="font-[Manrope] text-[#002060] mt-[10.5rem] ml-[7rem] l text-[2.2rem] text-left font-bold w-[30.125rem] tracking-wider h-[5.0625rem ">
          Here's what you get as a MasterMaths Student :
        </h2>
        <ul className="ml-[9rem] font-[Manrope] w-[30rem] text-left leading-10 font-semibold list-outside text-[#000000] flex flex-col ">
          <li>
            90-minutes of weekly Maths Coaching (Get mentored by qualified Maths
            coaches)
          </li>
          <li>
            Lesson Recording for All Classes (Unlimited Revision and No More
            Forgetting What's on the Whiteboard)
          </li>
          <li>
            Access to Online Maths Tutor (Ask Questions and Clear your Doubts
            Anytime)
          </li>
          <li>
            Extra Complimentary Sessions for P5/P6 and "O" Level Students (Added
            Exams' Preparations Support)
          </li>
          <li>
            {" "}
            Feedback and Progress Updates (Get Updates on Lesson Summaries and
            Child's Areas for Improvements)
          </li>
        </ul>
        <div className="flex-col  absolute mt-[-24rem] ml-[6rem]  ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="mb-14"
          >
            <circle cx="9" cy="9" r="8.5" stroke="#F24E3D" />
            <circle cx="9.00003" cy="8.99991" r="4.90909" fill="#F24E3D" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="mb-[4.1rem]"
          >
            <circle cx="9" cy="9" r="8.5" stroke="#F24E3D" />
            <circle cx="9.00003" cy="8.99991" r="4.90909" fill="#F24E3D" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="mb-[4.0rem]"
          >
            <circle cx="9" cy="9" r="8.5" stroke="#F24E3D" />
            <circle cx="9.00003" cy="8.99991" r="4.90909" fill="#F24E3D" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="mb-14"
          >
            <circle cx="9" cy="9" r="8.5" stroke="#F24E3D" />
            <circle cx="9.00003" cy="8.99991" r="4.90909" fill="#F24E3D" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="mb-14"
          >
            <circle cx="9" cy="9" r="8.5" stroke="#F24E3D" />
            <circle cx="9.00003" cy="8.99991" r="4.90909" fill="#F24E3D" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
