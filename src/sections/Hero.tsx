import { CURRENT_YEAR } from "@/consts/siteData";
import { Skeleton } from "@/components/ui/skeleton";
import dynamic from "next/dynamic";

const Sho3ba = dynamic(() => import("@/components/sho3ba"), {
  loading: () => <Skeleton className="w-[190px] h-[36.4px]" />,
});

function Hero() {
  return (
    <div className="flex justify-around items-center flex-col gap-5 py-10 min-h-[calc(100vh-64px-63.6px)]">
      <Sho3ba
        name="علمي رياضة"
        finishEmojis={["📐", "✖️", "♾️", "𝞹", "🧠", "e", "🎓"]}
        finishDate={new Date(`${CURRENT_YEAR}-07-20T08:00:00Z`)}
      />
      <Sho3ba
        name="علمي علوم"
        finishEmojis={["🧪", "🧬", "🌱", "⌬", "🌏", "👨🏻‍🔬", "🎓"]}
        finishDate={new Date(`${CURRENT_YEAR}-07-17T09:00:00Z`)}
      />
      <Sho3ba
        name="ادبي"
        finishEmojis={["📜", "🎭", "🎨", "🏛️", "📖", "🎓"]}
        finishDate={new Date(`${CURRENT_YEAR}-07-17T09:00:00Z`)}
      />
    </div>
  );
}

export default Hero;
