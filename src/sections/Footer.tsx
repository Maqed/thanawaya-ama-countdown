import { CREATOR_LINK, CREATOR } from "@/consts/siteData";
import Link from "next/link";

function Footer() {
  return (
    <footer className="py-4 flex justify-center items-center border-t-2">
      <p>
        Made with ❤️ by{" "}
        <b>
          <Link
            target="_blank"
            className="inline text-primary"
            href={CREATOR_LINK}
          >
            {CREATOR}
          </Link>
        </b>
      </p>
    </footer>
  );
}

export default Footer;
