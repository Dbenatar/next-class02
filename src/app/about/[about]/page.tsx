import Link from "next/link";

export default function Page() {
  return (
    <div>
      <h2 className="text-center underline text-lg">About me</h2>

      <p className="text-center p-10 m-6">General Interests</p>

      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
      <Link href="/">Go Home</Link>
    </div>
  );
}
