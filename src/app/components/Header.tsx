import Link from "next/link";
import About from "../about/page";

export default function Header() {
  return (
    <>
      <header className="text-lime-500 p-8">
        About Dom
        <Link href={"./about/"} />
      </header>
    </>
  );
}
