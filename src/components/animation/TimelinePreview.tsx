const TimelinePreview = ({ grid }: { grid: number[][] }) => {
  return (
    <div className="grid grid-cols-16 scale-[1] w-[100px] h-[100px]">
      {grid.map((el, i) =>
        el.map((sub, l) => (
          <div
            key={Math.random()}
            className={`w-[5px] h-[5px] border flex justify-center items-center ${
              sub === 1 ? "bg-slate-800 text-white" : "bg-white text-black"
            }`}
          ></div>
        ))
      )}
    </div>
  );
};
export default TimelinePreview;
