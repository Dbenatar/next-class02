import Link from "next/link";
import About from "../pages/About";

export default function Header() {
  return (
    <>
      <header className="text-lime-500">
        About Dom
        <Link href={"./pages/About"} />
      </header>
    </>
  );
}
