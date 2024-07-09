import { APP_NAME } from "@/consts/siteData";
import { ThemeToggle } from "./ui/theme-toggle";

function Navbar() {
  return (
    <nav className="px-2 py-3 flex flex-row items-center justify-between">
      <h1 className="text-2xl text-primary font-semibold">{APP_NAME}</h1>
      <ThemeToggle />
    </nav>
  );
}

export default Navbar;
