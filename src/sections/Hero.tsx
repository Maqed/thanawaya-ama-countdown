import { CURRENT_YEAR } from "@/consts/siteData";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const Sho3ba = dynamic(() => import("@/components/sho3ba"), {
  loading: () => <Skeleton className="w-[190px] h-[36.4px]" />,
  ssr: false,
});

function Hero() {
  return (
    <div className="flex justify-center items-center flex-col gap-5">
      <Sho3ba
        name="علمي رياضة"
        startDate={new Date(`${CURRENT_YEAR}-06-15T09:00:00+03:00`)}
        startEmojis={["💪", "🔥", "⚡", "🚀", "💯", "🎯", "💫"]}
        finishEmojis={["📐", "✖️", "♾️", "𝞹", "🧠", "e", "🎓"]}
        finishDate={new Date(`${CURRENT_YEAR}-07-10T11:00:00+03:00`)}
      />
      <Sho3ba
        name="علمي علوم"
        startDate={new Date(`${CURRENT_YEAR}-06-15T09:00:00+03:00`)}
        startEmojis={["💪", "🔥", "⚡", "🚀", "💯", "🎯", "💫"]}
        finishEmojis={["🧪", "🧬", "🌱", "⌬", "🌏", "👨🏻‍🔬", "🎓"]}
        finishDate={new Date(`${CURRENT_YEAR}-07-10T12:00:00+03:00`)}
      />
      <Sho3ba
        name="ادبي"
        startDate={new Date(`${CURRENT_YEAR}-06-15T09:00:00+03:00`)}
        startEmojis={["💪", "🔥", "⚡", "🚀", "💯", "🎯", "💫"]}
        finishEmojis={["📜", "🎭", "🎨", "🏛️", "📖", "🎓"]}
        finishDate={new Date(`${CURRENT_YEAR}-07-10T12:00:00+03:00`)}
      />
    </div>
  );
}

export default Hero;
