import Link from "next/link";

type aboutType = {
  name: string;
  id: number;
};

let about: aboutType[] = [
  { name: "Cooking", id: 0 },
  { name: "Running", id: 1 },
  { name: "Strength Training", id: 2 },
  { name: "Gaming", id: 3 },
  { name: "Music", id: 4 },
];

export default function Header() {
  return (
    <>
      <header className="text-lime-500 p-8 text-lg">
        <Link href={"/"}>About Dom</Link>

        <nav>
          <ul>
            <Link href="/aboutMe">
              <li>Cooking</li>
            </Link>
            <Link href="/aboutMe">
              <li>Running</li>
            </Link>
            <Link href="/aboutMe">
              <li>Strength Training</li>
            </Link>
            <Link href="/aboutMe">
              <li>Gaming</li>
            </Link>
            <Link href="/aboutMe">
              <li>Music</li>
            </Link>
          </ul>
        </nav>
      </header>
    </>
  );
}
