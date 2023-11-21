import Link from "next/link";

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
  if (searchParams.sortBy == "asc") {
    about.sort(compareAbout);
  } else if (searchParams.sortBy == "desc") {
    about.sort(compareAbout).reverse();
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

      <p className="text-center p-10 m-6">General Interests</p>
      {about.map((about) => {
        return (
          <div key={about.id}>
            <Link href={`/aboutMe/${about.name.toLowerCase()}`}>
              {about.name}
            </Link>
          </div>
        );
      })}
      {/* <ul className="text-center">
        <li>Cooking</li>
        <li>Running</li>
        <li>Strength Training</li>
        <li>Gaming</li>
        <li>Music</li>
      </ul> */}
      <Link className="" href="/">
        Go Home
      </Link>
    </div>
  );
}
