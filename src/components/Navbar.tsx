import { APP_NAME } from "@/consts/siteData";

function Navbar() {
  return (
    <nav>
      <h1 className="text-2xl text-primary font-semibold">{APP_NAME}</h1>
    </nav>
  );
}

export default Navbar;
