"use client";
import Navbar from "@/components/home/Navbar";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
const CameraPage = () => {
  const [fileName, setFileName] = useState<string>("");
  const handleTakeShot = async () => {
    if (fileName.trim() !== "") {
      try {
        const response = await fetch(
          `http://192.168.0.103:5001/take_photo?name=${fileName.trim()}`
        );
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div>
      <main className="w-screen h-screen flex flex-col font-kanit ">
        <h1 className="text-xl p-8">
          <Image src="/logo.png" width={200} height={200} alt="logo" />
        </h1>
        <div className="flex flex-1  p-2 w-full">
          <Navbar />
          <div className=" m-4 w-full flex flex-col gap-4 items-center">
            <div className="p-3 bg-slate-400/20 rounded-xl flex flex-col items-center gap-2">
              <p className="text-xl text-left w-full">Kamera</p>
              <img
                src="http://192.168.0.103:5001/video_feed"
                width={800}
                height={800}
                alt="wow"
              ></img>
              <div className="flex gap-2 items-center">
                <Input
                  label="Nazwa pliku"
                  placeholder="Wpisz nazwę pliku"
                  value={fileName}
                  onValueChange={setFileName}
                />
                <Button
                  // className="p-2 bg-red-500 rounded-xl flex justify-center items-center text-white"
                  onClick={() => handleTakeShot()}
                  variant="solid"
                  color="danger"
                >
                  Take a shot!
                </Button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default CameraPage;
