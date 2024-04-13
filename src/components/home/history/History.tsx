import { useEffect, useState } from "react";
import HistoryRow from "./HistoryRow";
import { socket } from "@/socket";
import { HistoryRow as HistoryRowType } from "@/components/types";

const History = () => {
  const [history, setHistory] = useState<HistoryRowType[]>([]);
  useEffect(() => {
    socket.on("historyEntry", (data) => {
      setHistory(data.history);
      console.log(data.history);
    });
    (async () => {
      const res = await fetch("http://192.168.0.103:3030/esp/getHistory");
      const data = await res.json();
      console.log(data);
      setHistory(data.history);
    })();
  }, []);
  return (
    <div className=" mx-6">
      <p className="text-2xl text-slate-600/40 text-cyan-500">
        Historia aktywności
      </p>
      <div className="p-1 rounded-xl bg-slate-500/10 mt-2">
        <div className="w-full gap-2 flex justify-evenly">
          <div className="border-r-2 border-r-black/10 p-2 flex justify-center flex-1 text-slate-500/40">
            Wydarzenie
          </div>
          <div className="border-r-2 border-r-black/10 p-2 flex-1 flex justify-center text-slate-500/40">
            Komunikat
          </div>
          <div className=" p-2 flex-1 flex justify-center text-slate-500/40">
            Data
          </div>
        </div>
        <div
          className={`rounded-xl  flex flex-col gap-1 mt-1 h-[300px] overflow-y-scroll scrollbar-hide ${
            history.length === 0 && "justify-center items-center"
          }`}
        >
          {history.length === 0 && "Brak wpisów aktywności"}
          {history.map((el) => (
            <HistoryRow
              key={Math.random()}
              eventName={el.title}
              eventDesc={el.comment}
              time={el.time}
              type={el.type}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
export default History;
