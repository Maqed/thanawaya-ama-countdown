import Sho3ba from "@/components/sho3ba";
import { CURRENT_YEAR } from "@/consts/siteData";

function Hero() {
  return (
    <div className="flex justify-around items-center flex-col gap-5 py-10 min-h-[calc(100vh-64px-58px)]">
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
