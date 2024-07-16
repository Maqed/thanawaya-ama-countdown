import { CREATOR_LINK, CREATOR, CREATOR_IMG_SRC } from "@/consts/siteData";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <footer className="py-4 flex justify-center items-center border-t-2">
      <p>
        Made with ❤️ by{" "}
        <Link
          target="_blank"
          className="text-primary inline-flex justify-between items-center gap-1 font-bold"
          href={CREATOR_LINK}
        >
          <span className="underline">{CREATOR}</span>
          <Image
            src={CREATOR_IMG_SRC}
            alt="Maged Ibrahim"
            width={30}
            height={30}
            className="inline"
          />
        </Link>
      </p>
    </footer>
  );
}

export default Footer;
