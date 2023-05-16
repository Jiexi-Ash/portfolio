import Link from "next/link";
import React from "react";

function Navbar() {
  return (
    <header className="w-full border border-b px-10 py-4 shadow-sm">
      <nav className="flex w-full items-center justify-between">
        <ul className="flex items-center space-x-6">
          <li>
            <Link href="/" className="text-sm hover:cursor-pointer">
              Home
            </Link>
          </li>
          <li>
            <Link href="/" className="text-sm hover:cursor-pointer">
              About
            </Link>
          </li>
          <li>
            <Link href="/" className="text-sm hover:cursor-pointer">
              Projects
            </Link>
          </li>
        </ul>

        <div>
          <button className="rounded-md bg-sky-400 px-6  py-2 text-sm text-white">
            Resume
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
