import React from "react";

const ProgressBar = (props: any) => {
  return (
    <div className="pb-[5px]">
      <div className="flex justify-between text-white font-semibold text-base pb-[10px]">
        <p>{props.title}</p>
        <p>{props.label}</p>
      </div>
      <div className="bg-[#003F99] h-[10px] rounded-full">
        <div
          className={`${props.percent} h-[10px] bg-[#FF850E] rounded-full`}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
