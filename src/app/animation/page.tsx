"use client";
import Creator from "@/components/animation/Creator";
import Timeline from "@/components/animation/Timeline";
import Navbar from "@/components/home/Navbar";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
const AnimPage = () => {
  const [frames, setFrames] = useState<number[][][]>([]);
  const [file, setFile] = useState<File>();
  const addFrame = (grid: number[][]) => {
    console.log(grid);
    // if (frames.length < 10) {
    const fr = [...frames];
    fr.push(grid);
    setFrames(fr);
    // }
  };
  useEffect(() => {
    console.log(frames);
  }, [frames]);
  const uploadFile = async () => {
    // const formData = new FormData();
    // if (!file) return;
    // formData.append("file", file);
    // console.log(formData);
  };
  // const res = await fetch("http://
  return (
    <div>
      <main className="w-screen h-screen flex flex-col font-kanit ">
        <h1 className="text-xl p-8">
          <Image src="/logo.png" width={200} height={200} alt="logo" />
        </h1>
        <div className="flex flex-1  p-2 w-full">
          <Navbar />
          <div className="m-4 w-full flex gap-6 justify-center">
            <div className=" flex flex-col gap-4 items-center">
              <Creator addFrame={addFrame} />
              {frames.length > 0 && <Timeline frames={[...frames]} />}
            </div>
            <div className="border rounded-xl p-6  h-[200px] w-[300px] flex-0 gap-2">
              <div>Wybierz plik do wyświetlenia</div>
              <form
                className="flex flex-col gap-2"
                action="http://192.168.0.103:5001/upload_photo"
                method="post"
                encType="multipart/form-data"
                // onSubmit={(e) => e.preventDefault()}
              >
                <input
                  type="file"
                  name="photo"
                  className="p-2 border bg-white"
                  // onChange={(e) => {
                  //   if (e.target.files) {
                  //     console.log(e.target.files[0]);
                  //     setFile(e.target.files[0]);
                  //   }
                  // }}
                />
                <Button
                  variant="light"
                  color="success"
                  type="submit"
                  onClick={uploadFile}
                >
                  Wyślij
                </Button>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default AnimPage;
