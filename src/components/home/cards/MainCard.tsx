"use client";

import { Sensor } from "@/components/types";

type Props = {
  title: string;
  desc: string;
  data: Sensor;
  valueDesc?: string;
  type?: "clicker" | "temperature";
  callback?: () => void;
};
const MainCard = ({ title, desc, data, valueDesc, callback, type }: Props) => {
  return (
    <div
      className={`rounded-xl p-6   shadow-[0_3px_10px_rgba(6,182,212,0.3)] border border-gray-100 flex flex-col gap-2 transition-all hover:scale-105 ${
        callback && "cursor-pointer "
      }`}
      onClick={() => callback && callback()}
    >
      <div className="text-xl text-cyan-500 flex flex-nowrap items-center gap-2">
        {title}
        <div
          className={`w-[15px] h-[15px] rounded-full ${
            !type
              ? data.status === "on"
                ? "bg-green-500"
                : "bg-red-500"
              : data
              ? "bg-green-500"
              : "bg-red-500"
          } animation-pulse`}
        ></div>
      </div>
      <div
        className={`text-6xl font-bold ${
          type === "temperature" &&
          (data.data < 39
            ? "text-blue-300"
            : data.data < 40
            ? "text-green-300"
            : "text-red-300")
        }`}
      >
        {type == "clicker" ? data.status : data.data}
        <span className="text-3xl text-slate-600/40  ">
          {valueDesc && valueDesc}
        </span>
      </div>
      <div className="text-md text-slate-600/40 text-right">{desc}</div>
    </div>
  );
};
export default MainCard;
