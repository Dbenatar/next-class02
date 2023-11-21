import Link from "next/link";
import About from "../aboutMe/page";

export default function Header() {
  return (
    <>
      <header className="text-lime-500 p-8 text-lg">
        About Dom
        <Link href={"./aboutMe"} />
      </header>
    </>
  );
}
