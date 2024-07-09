"use client";
import Countdown from "react-countdown";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

type Sho3baProps = {
  name: string;
  finishDate: Date;
};

function Sho3ba({ name, finishDate }: Sho3baProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">{name}</h1>
      <Sho3baCountdown name={name} finishDate={finishDate} />
    </div>
  );
}
function Sho3baCountdown({ name, finishDate }: Sho3baProps) {
  const renderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      // Render a completed state
      return (
        <h3 className="text-3xl">
          الف الف مبروك لشعبة{" "}
          <span className="text-primary font-bold">{name}</span> انهم خلصوا
          الامتحانات
        </h3>
      );
    } else {
      // Render a countdown
      return (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>الايام</TableHead>
              <TableHead>الساعات</TableHead>
              <TableHead>الدقايق</TableHead>
              <TableHead>الثواني</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>{days}</TableCell>
              <TableCell>{hours}</TableCell>
              <TableCell>{minutes}</TableCell>
              <TableCell>{seconds}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      );
    }
  };
  return (
    <Countdown className="text-3xl" renderer={renderer} date={finishDate} />
  );
}

export default Sho3ba;
