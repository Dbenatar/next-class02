import Link from "next/link";
import { Metadata } from "next";
import GlassCard from "@/app/components/GlassCard";

export const metadata: Metadata = {
  title: "About Dom Blog",
  description: "A list of Doms hobbies",
};

type aboutSearchQuery = {
  sortBy: string;
};

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

function compareAbout(a: aboutType, b: aboutType) {
  if (a.name < b.name) {
    return -1;
  } else if (a.name > b.name) {
    return 1;
  } else {
    return 0;
  }
}

export default function Page({
  searchParams,
}: {
  searchParams: aboutSearchQuery;
}) {
  let sortedAbout = [...about];

  if (searchParams.sortBy == "asc") {
    sortedAbout.sort(compareAbout);
  } else if (searchParams.sortBy == "desc") {
    sortedAbout.sort(compareAbout).reverse();
  }

  return (
    <div>
      <h2 className="text-center underline text-lg">About me</h2>
      <p>{searchParams.sortBy}</p>
      <br />
      <Link href="/aboutMe">Remove sort</Link>
      <br />
      <Link href="/aboutMe?sortBy=asc">Condescending Order</Link>
      <br />
      <Link href="/aboutMe?sortBy=desc">Descending Order</Link>

      <p className="text-center p-10 m-6 underline">General Interests</p>

      <div className="p-8 flex">
        <GlassCard />
      </div>
      {/* {sortedAbout.map((about) => {
        return (
          <div key={about.id}>
            <Link href={`/aboutMe/${about.name.toLowerCase()}`}>
              {about.name}
            </Link>
          </div>
        );
      })} */}

      <Link className="" href="/">
        Go Home
      </Link>
    </div>
  );
}
