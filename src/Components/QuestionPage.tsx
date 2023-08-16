import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import Contactpage from "./Contactpage";

type form = {
  _id: string;
  question: String;
  type: String;
  order: number;
  options: {
    option: String;
    _id: string;
  };
};

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
    const [queryData, setQueryData] = useState<any>({});

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error : {error.message}</p>;
    if (data) console.log(data);
    return data.getFormQuestions.map(({ _id, order, question }: form) => {
      let orders: number[] = [20, 40, 60, 80, 100];
      return (
        <>
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
        </>
      );
    });
  }
  return (
    <div>
      <h1 className="text-[#002060] text-[1.875rem] font-bold leading-normal text-left mt-4 ml-4">
        MasterMaths
      </h1>
      <h2 className="text-center font-bold text-[2.5rem] text-[#002060] font-[Manrope] leading-10 mt-10 ">
        MasterMaths Registration Form for Weekly Class
      </h2>
      <DisplayDetail />
      <Contactpage />
    </div>
  );
}

export default QuestionPage;
