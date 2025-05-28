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

type Sho3baCountdownProps = {
  name: string;
  finishDate: Date;
  finishEmojis: string[];
};

function Sho3ba({
  name,
  startDate,
  finishDate,
  finishEmojis,
  startEmojis,
}: Sho3baCountdownProps & {
  startDate: Date;
  startEmojis: string[];
}) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-bold">{name}</h1>
      <div className="flex flex-col gap-4">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>الايام</TableHead>
              <TableHead>الساعات</TableHead>
              <TableHead>الدقايق</TableHead>
              <TableHead>الثواني</TableHead>
              <TableHead>النوع</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <Sho3baCountdown
              name={`${name}-start`}
              cellName="البداية"
              finishedCountdownEmoji="⚡"
              finishEmojis={startEmojis}
              finishDate={startDate}
            />
            <Sho3baCountdown
              name={`${name}-finish`}
              cellName="النهاية"
              finishedCountdownEmoji="🥳"
              finishEmojis={finishEmojis}
              finishDate={finishDate}
            />
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

function Sho3baCountdown({
  name,
  finishedCountdownEmoji,
  finishDate,
  finishEmojis,
  cellName,
}: Sho3baCountdownProps & {
  finishedCountdownEmoji: string;
  cellName: string;
}) {
  const { reward: confettiReward } = useReward(
    `${name}-confettiReward`,
    "confetti"
  );
  const { reward: emojiReward } = useReward(`${name}-emojiReward`, "emoji", {
    emoji: finishEmojis,
    startVelocity: 25,
  });

  function giveReward() {
    confettiReward();
    emojiReward();
  }

  useEffect(() => {
    if (new Date(finishDate) < new Date(Date.now())) {
      giveReward();
    }
  }, []);

  const CountdownRenderer = ({
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
      return (
        <TableRow>
          <TableCell className="p-0" colSpan={5}>
            <button
              onClick={() => {
                giveReward();
              }}
              className="cursor-pointer p-2 w-full h-full"
            >
              <span id={`${name}-confettiReward`} />
              <span id={`${name}-emojiReward`} />
              <h3 className="text-3xl">{finishedCountdownEmoji}</h3>
            </button>
          </TableCell>
        </TableRow>
      );
    } else {
      return (
        <TableRow>
          <TableCell>{days}</TableCell>
          <TableCell>{hours}</TableCell>
          <TableCell>{minutes}</TableCell>
          <TableCell>{seconds}</TableCell>
          <TableCell>{cellName}</TableCell>
        </TableRow>
      );
    }
  };

  return (
    <Countdown
      className="text-3xl"
      renderer={CountdownRenderer}
      date={finishDate}
      onComplete={() => {
        giveReward();
      }}
    />
  );
}

export default Sho3ba;
