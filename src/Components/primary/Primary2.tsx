import React from "react";

function Primary2() {
  const tagLine: string = "[Online or Tampines, MasterMaths Coach]";
  return (
    <div>
      <div className="border  border-[#ff660085] rounded-[0.1875rem] w-[14.5625rem] absolute h-[6.875rem] bg-[#ff660012] mt-4 ml-2 mr-0">
        <div className="m-auto mt-2 font-[Manrope] h-[4.8125] w-[12.875rem]">
          <h3 className="text-[#002060] leading-7 text-[1rem] font-semibold ">
            Saturday 5:45PM to 7:15PM
          </h3>
          <p className="text-[#797979] font-semibold text-[1rem] leading-7">
            {tagLine}
          </p>
        </div>
      </div>
      <div className="border  border-[#ff660085] rounded-[0.1875rem] w-[14.5625rem] h-[6.875rem] absolute bg-[#ff660012] mt-4 ml-[16rem]">
        <div className="m-auto mt-2 font-[Manrope] h-[4.8125] w-[12.875rem]">
          <h3 className="text-[#002060] leading-7 text-[1rem] font-semibold ">
            Saturday 5:45PM to 7:15PM
          </h3>
          <p className="text-[#797979] font-semibold text-[1rem] leading-7">
            {tagLine}
          </p>
        </div>
      </div>
      <div className="border border-[#ff660085] rounded-[0.1875rem] w-[14.5625rem] h-[6.875rem] absolute bg-[#ff660012] mt-4 ml-[33rem]">
        <div className="m-auto mt-2 font-[Manrope] h-[4.8125] w-[12.875rem]">
          <h3 className="text-[#002060] leading-7 text-[1rem] font-semibold ">
            Saturday 4:15PM to 5:30PM
          </h3>
          <p className="text-[#797979] font-semibold text-[1rem] leading-7">
            {tagLine}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Primary2;
