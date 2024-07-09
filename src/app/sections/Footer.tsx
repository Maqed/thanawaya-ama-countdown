import { AUTHOR_LINK } from "@/consts/siteData";
import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-4 flex justify-center items-center">
      Made with ❤️ by{" "}
      <Link target="_blank" className="pl-1" href={AUTHOR_LINK}>
        Maged Ibrahim
      </Link>
    </footer>
  );
}

export default Footer;
