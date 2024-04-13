"use client";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Creator = ({ addFrame }: { addFrame: (grid: number[][]) => void }) => {
  const [grid, setGrid] = useState<number[][]>([]);
  useEffect(() => {
    const g = [];
    for (let i = 0; i < 16; i++) {
      const sub = new Array(16).fill(0);
      g.push(sub);
    }
    setGrid(g);
  }, []);
  const handleClick = (i: number, l: number) => {
    const gridCp = [...grid];
    gridCp[i][l] === 1 ? (gridCp[i][l] = 0) : (gridCp[i][l] = 1);
    setGrid(gridCp);
  };
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="grid grid-cols-16">
        {grid.map((el, i) =>
          el.map((sub, l) => (
            <div
              key={Math.random()}
              className={`w-[30px] h-[30px] border-2 flex justify-center items-center cursor-pointer ${
                sub === 1 ? "bg-slate-800 text-white" : "bg-white text-black/10"
              }`}
              onClick={() => {
                handleClick(i, l);
              }}
            >
              {i}
            </div>
          ))
        )}
      </div>
      <div className="flex gap-4">
        <Button
          variant="light"
          color="success"
          onClick={() => {
            addFrame(JSON.parse(JSON.stringify([...grid])));
          }}
        >
          Zapisz klatkę
        </Button>
      </div>
    </div>
  );
};
export default Creator;
