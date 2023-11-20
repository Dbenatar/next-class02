import Link from "next/link";

import React from "react";

export default function About({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Link href="/about"></Link>
      <p className="text-center">All About Dom</p>
    </div>
  );
}
