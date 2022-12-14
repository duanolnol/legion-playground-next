import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <ul>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="/dropdown">Dropdown</Link>
      </li>
      <li>
        <Link href="/carousel">Carousel</Link>
      </li>
    </ul>
  );
}
