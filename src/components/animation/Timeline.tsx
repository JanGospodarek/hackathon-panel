import { Button } from "@nextui-org/react";
import TimelinePreview from "./TimelinePreview";

const Timeline = ({ frames }: { frames: number[][][] }) => {
  const handleSubmit = async () => {
    const res = await fetch("http://192.168.0.103:3030/esp/setAnimation", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ frames }),
    });
  };
  return (
    <div className="flex flex-col bg-slate-600/10 rounded-xl p-4 gap-2">
      <div className="flex gap-2 items-center">
        <p className="text-xl">Klatki</p>
        <Button variant="light" color="primary" onClick={handleSubmit}>
          Wyślij do ekranu
        </Button>
      </div>

      <div className="flex gap-4 flex-wrap">
        {frames.map((frame) => (
          <TimelinePreview key={Math.random()} grid={frame} />
        ))}
      </div>
    </div>
  );
};
export default Timeline;
