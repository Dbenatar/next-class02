import Link from "next/link";

import React from "react";

export default function About({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Link href="/"></Link>
      <h1 className="text-center">All About Dom</h1>
    </div>
  );
}
