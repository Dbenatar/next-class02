import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-gray-700">
      <h1 className="bg-gray-300 rounded-sm underline decoration-wavy underline-offset-8 decoration-4 decoration-lime-500 p-8 rounded-md text-lg">
        Dom is learning Next.JS and Tailwind
      </h1>

      <img
        className="py-10 opacity-50"
        src="https://assets3.thrillist.com/v1/image/2778887/size/gn-gift_guide_variable_c.jpg"
        alt="Hans Gruber"
      />

      <h2 className="py-20 flex space-x-8 ">
        <Link
          href="/about/page.tsx"
          className="no-underline hover:underline hover:uppercase"
        >
          About
        </Link>
        <Link
          href="https://i.imgflip.com/5c3y7l.gif"
          className="no-underline hover:underline hover:uppercase"
        >
          Dom's Secret
        </Link>
      </h2>
    </main>
  );
}
