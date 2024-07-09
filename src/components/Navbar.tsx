import { APP_NAME, CURRENT_YEAR, GITHUB_REPO } from "@/consts/siteData";
import { ThemeToggle } from "./ui/theme-toggle";
import { Github } from "lucide-react";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="px-2 py-3 flex flex-row items-center justify-between">
      <h1 className="text-2xl text-primary font-semibold">
        {APP_NAME} {CURRENT_YEAR}
      </h1>
      <div className="flex justify-between gap-3 items-center">
        <Link target="_blank" href={GITHUB_REPO}>
          <Github />
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
}

export default Navbar;
