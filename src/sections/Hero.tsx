import Sho3ba from "@/components/sho3ba";
function Hero() {
  return (
    <div className="flex justify-around items-center flex-col gap-5 py-10 min-h-[calc(100vh-120px)]">
      <Sho3ba name="علمي رياضة" finishDate={new Date("2024-07-20T09:00:00Z")} />
      <Sho3ba name="علمي علوم" finishDate={new Date("2024-07-17T09:00:00Z")} />
      <Sho3ba name="ادبي" finishDate={new Date("2024-07-17T09:00:00Z")} />
    </div>
  );
}

export default Hero;
