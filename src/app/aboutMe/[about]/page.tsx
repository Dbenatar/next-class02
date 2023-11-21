import Link from "next/link";
type aboutParam = { params: { about: string } };

export function generateMetadata({ params }: aboutParam) {
  const modTitle = params.about[0].toUpperCase() + params.about.slice(1);
  return {
    title: `Doms about -${modTitle}`,
    description: `About Dom - fun facts about ${params.about}`,
  };
}

export default function Page({ params }: aboutParam) {
  return (
    <div>
      <h2 className="text-center">All About : {params.about}</h2>
      <Link href="/">Go Home</Link>
    </div>
  );
}
