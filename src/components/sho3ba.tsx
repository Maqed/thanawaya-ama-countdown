"use client";
import Countdown from "react-countdown";

type Sho3baProps = {
  name: string;
  finishDate: Date;
};

function Sho3ba({ name, finishDate }: Sho3baProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">{name}</h1>
      <Countdown className="text-3xl" date={finishDate}>
        <h3 className="text-3xl">
          الف الف مبروك لشعبة{" "}
          <span className="text-primary font-bold">{name}</span> انهم خلصوا
          الامتحانات
        </h3>
      </Countdown>
    </div>
  );
}
export default Sho3ba;
