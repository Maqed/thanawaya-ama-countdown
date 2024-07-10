"use client";
import Countdown from "react-countdown";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useReward } from "react-rewards";
import { useEffect } from "react";

type Sho3baProps = {
  name: string;
  finishDate: Date;
  finishEmojis: string[];
};

function Sho3ba({ name, finishDate, finishEmojis }: Sho3baProps) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">{name}</h1>
      <Sho3baCountdown
        finishEmojis={finishEmojis}
        name={name}
        finishDate={finishDate}
      />
    </div>
  );
}
function Sho3baCountdown({ name, finishDate, finishEmojis }: Sho3baProps) {
  const { reward: confettiReward } = useReward(
    `${name}-confettiReward`,
    "confetti"
  );
  const { reward: emojiReward } = useReward(`${name}-emojiReward`, "emoji", {
    emoji: finishEmojis,
    startVelocity: 25,
  });
  useEffect(() => {
    // Check whether exams ended or not
    if (new Date(finishDate) < new Date(Date.now())) {
      confettiReward();
      emojiReward();
    }
  }, []);
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
        <div
          onClick={() => {
            confettiReward();
            emojiReward();
          }}
          className="cursor-pointer flex flex-col justify-center items-center pt-3"
        >
          <span id={`${name}-confettiReward`} />
          <span id={`${name}-emojiReward`} />
          <h3 className="text-3xl">🥳</h3>
        </div>
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
