import { APP_NAME } from "@/consts/siteData";

function Navbar() {
  return (
    <nav className="px-2 py-3">
      <h1 className="text-2xl text-primary font-semibold">{APP_NAME}</h1>
    </nav>
  );
}

export default Navbar;
