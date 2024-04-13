"use client";
import { useEffect, useState } from "react";
import MainCard from "./MainCard";
import { socket } from "@/socket";
import { Sensors } from "@/components/types";
const MainCards = () => {
  const [sensors, setSensors] = useState<Sensors>();
  useEffect(() => {
    socket.on("sensorUpdate", (data) => {
      setSensors(data.sensors);
    });
  }, []);

  return (
    <div className="flex gap-4 justify-center w-full  flex-wrap">
      <MainCard
        title="czujnik gestów"
        data={sensors?.movement ? sensors.movement : { data: 0, status: "off" }}
        desc="Ilość zadziałań"
        callback={() => {
          console.log("klik");
        }}
      />
      <MainCard
        title="czujnik krańcowy"
        data={sensors?.clicker ? sensors.clicker : { data: 0, status: "off" }}
        type="clicker"
        desc="Czy styka"
      />
      <MainCard
        title="temperatura"
        data={
          sensors?.temperature
            ? sensors.temperature
            : { data: 0, status: "off" }
        }
        desc="Aktualna temperatura"
        type="temperature"
        valueDesc="°C"
      />
      <MainCard
        title="natężenie światła"
        data={sensors?.light ? sensors.light : { data: 0, status: "off" }}
        desc="Aktualne natężenie światła"
        valueDesc="lx"
      />
    </div>
  );
};
export default MainCards;
