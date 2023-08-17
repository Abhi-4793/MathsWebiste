import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";

import { useNavigate } from "react-router-dom";

interface form {
  _id: string;
  question: string;
  type: string;
  order: number;
  options: { option: string; _id: string; __typename: string };
}

function QuestionPage() {
  const FORM_QUESTION = gql`
    query GetFormQuestions {
      getFormQuestions {
        _id
        question
        type
        order
        options {
          _id
          option
        }
      }
    }
  `;

  function DisplayDetail(): JSX.Element {
    const { loading, error, data } = useQuery(FORM_QUESTION);
    // const [width, setWidth] = useState(["20", "40", "60", "80", "100"]);
    const [questionindex, setQuestionIndex] = useState(0);
    const navigate = useNavigate();
    function handleclick() {
      setQuestionIndex(questionindex + 1);
      if (questionindex === 4) {
        navigate("/ContactPage");
      }
    }
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data) console.log(data);
    let orders = ["20", "40", "60", "80", "100"];
    console.log(data.getFormQuestions[3].options[0].option);
    // useEffect(() => {});
    return (
      <>
        <div className="w-[69.375rem] m-auto mt-[2rem] h-[28.5625rem] rounded-[0.3125rem] border-[1px] border-[#8ea7d980] bg-[#fff] shadow-md  shadow-blue-900/75  ">
          <div className="w-[69.375rem] h-[6.5rem] border-2 border-[#8ea7d980]  ">
            <div className="w-full mt-[2.4rem] rounded-[12.5rem] bg-[#BFD3F4] dark:bg-neutral-400">
              <div
                className="bg-[#f60] p-0.5 text-center text-xs font-medium rounded-[12.5rem] leading-none text-primary-100"
                style={{ width: `${orders[questionindex]}%` }}
              >
                {orders[questionindex]} %
              </div>
            </div>
          </div>
          <div
            key={data.getFormQuestions[questionindex]._id}
            className="text-[#002060] text-center text-[Manrope] text-[1.75rem] font-bold leading-8"
          >
            {data.getFormQuestions[questionindex].question}
          </div>
          <div className="justify-between  flex flex-row ml-[-10rem] w-[40rem] h-[5rem]">
            {data.getFormQuestions[questionindex].options.map(
              ({ options }: form) => {
                return (
                  <div
                    className="w-[14.5625rem] text-center  ml-[18rem]  mt-[8rem]   h-[4.4375rem] rounded-[0.1875rem] border-[2px] border-[#73A3CD] bg-[#ffffff12] flex-shrink-0"
                    key={options?._id}
                  >
                    <button
                      onClick={handleclick}
                      className="m-auto w-full h-full text-black font-[manrope] text-[1.125rem] font-medium "
                    >
                      {options?.option}
                    </button>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="w-full h-full bg-[#EFF4FF]">
      <h1 className="text-[#002060] text-[1.875rem] font-bold leading-normal text-left mt-4 ml-4">
        MasterMaths
      </h1>
      <h2 className="text-center font-bold text-[2.5rem] text-[#002060] font-[Manrope] leading-10 mt-10 ">
        MasterMaths Registration Form for Weekly Class
      </h2>
      <svg
        className="absolute right-10"
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
          d="M53.52 10.2869L48.2718 15.9403L43.0188 10.2869L37.7659 15.9403L32.5177 10.2869L27.2647 15.9403L22.0165 10.2869L16.7588 15.9403L11.5106 10.2869L6.25296 15.9403L1.00002 10.2869"
          stroke="#F24E3D"
          stroke-opacity="0.4"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
      <DisplayDetail />
      <svg
        className=" absolute -ml-6"
        xmlns="http://www.w3.org/2000/svg"
        width="78"
        height="93"
        viewBox="0 0 78 93"
        fill="none"
      >
        <path
          d="M17.21 3.51C17.21 5.45 15.64 7.02 13.7 7.02C11.76 7.02 10.19 5.45 10.19 3.51C10.19 1.57 11.76 0 13.7 0C15.64 0 17.21 1.57 17.21 3.51Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M47.39 3.51C47.39 5.45 45.82 7.02 43.88 7.02C41.94 7.02 40.37 5.45 40.37 3.51C40.37 1.57 41.94 0 43.88 0C45.82 0 47.39 1.57 47.39 3.51Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M77.58 3.51C77.58 5.45 76.01 7.02 74.07 7.02C72.13 7.02 70.56 5.45 70.56 3.51C70.56 1.57 72.13 0 74.07 0C76.01 0 77.58 1.57 77.58 3.51Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M17.21 32.14C17.21 34.08 15.64 35.65 13.7 35.65C11.76 35.65 10.19 34.08 10.19 32.14C10.19 30.2 11.76 28.63 13.7 28.63C15.64 28.63 17.21 30.2 17.21 32.14Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M47.39 32.14C47.39 34.08 45.82 35.65 43.88 35.65C41.94 35.65 40.37 34.08 40.37 32.14C40.37 30.2 41.94 28.63 43.88 28.63C45.82 28.63 47.39 30.2 47.39 32.14Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M77.58 32.14C77.58 34.08 76.01 35.65 74.07 35.65C72.13 35.65 70.56 34.08 70.56 32.14C70.56 30.2 72.13 28.63 74.07 28.63C76.01 28.63 77.58 30.2 77.58 32.14Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M17.21 60.77C17.21 62.71 15.64 64.28 13.7 64.28C11.76 64.28 10.19 62.71 10.19 60.77C10.19 58.83 11.76 57.26 13.7 57.26C15.64 57.26 17.21 58.83 17.21 60.77Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M47.39 60.77C47.39 62.71 45.82 64.28 43.88 64.28C41.94 64.28 40.37 62.71 40.37 60.77C40.37 58.83 41.94 57.26 43.88 57.26C45.82 57.26 47.39 58.83 47.39 60.77Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M77.58 60.77C77.58 62.71 76.01 64.28 74.07 64.28C72.13 64.28 70.56 62.71 70.56 60.77C70.56 58.83 72.13 57.26 74.07 57.26C76.01 57.26 77.58 58.83 77.58 60.77Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M17.21 89.39C17.21 91.33 15.64 92.9 13.7 92.9C11.76 92.9 10.19 91.33 10.19 89.39C10.19 87.45 11.76 85.88 13.7 85.88C15.64 85.88 17.21 87.45 17.21 89.39Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M47.39 89.39C47.39 91.33 45.82 92.9 43.88 92.9C41.94 92.9 40.37 91.33 40.37 89.39C40.37 87.45 41.94 85.88 43.88 85.88C45.82 85.88 47.39 87.45 47.39 89.39Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
        <path
          d="M77.58 89.39C77.58 91.33 76.01 92.9 74.07 92.9C72.13 92.9 70.56 91.33 70.56 89.39C70.56 87.45 72.13 85.88 74.07 85.88C76.01 85.88 77.58 87.45 77.58 89.39Z"
          fill="#F24E3D"
          fill-opacity="0.4"
        />
      </svg>
    </div>
  );
}

export default QuestionPage;

/* <>
          <div className="w-[69.375rem] m-auto mt-[2rem] h-[28.5625rem] rounded-[0.3125rem] border-2 border-[#0fff] bg-[#fff] shadow-md shadow-[#0000000d] shadow-[0px 4px 10px 0px]">
            <div className="w-[69.375rem] h-[6.5rem] border-2 border-[#8ea7d980]  ">
              <div className="w-full mt-[2.4rem] rounded-[12.5rem] bg-[#BFD3F4] dark:bg-neutral-400">
                <div
                  className="bg-[#f60] p-0.5 text-center text-xs font-medium rounded-[12.5rem] leading-none text-primary-100"
                  style={{ width: "25%" }}
                >
                  {order ? orders[order - 1] : null}%
                </div>
              </div>
            </div>
            <div
              key={_id}
              className="text-[#002060] text-center text-[Manrope] text-[1.75rem] font-bold leading-8"
            >
              {question}
            </div>
          </div>
        </> */
