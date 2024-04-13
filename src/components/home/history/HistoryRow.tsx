type Props = {
  eventName: string;
  eventDesc: string;
  time: string;
  type: "normal" | "alarm";
};
const HistoryRow = ({ eventDesc, eventName, time, type }: Props) => {
  return (
    <div
      className={`w-full rounded-xl gap-2 flex justify-evenly ${
        type === "normal" ? "bg-slate-400/30" : "bg-red-300"
      }`}
    >
      <div className="border-r-2 border-r-black/10 p-1 flex justify-center items-center flex-1 ">
        {eventName}
      </div>
      <div className="border-r-2 border-r-black/10 p-1 flex-1 flex justify-center items-center text-sm">
        {eventDesc}
      </div>
      <div className=" p-1 flex-1 flex justify-center items-center text-sm">
        {time}
      </div>
    </div>
  );
};
export default HistoryRow;
