import React from "react";
import User from "./User";
import Link from "next/link";

function Header() {
  return (
    <header className="flex justify-between p-4">
      <div className="flex space-x-4 items-center">
        <a href="https://about.google.com" className="link">
          About
        </a>
        <a href="https://store.google.com" className="link">
          Store
        </a>
      </div>
      <div className="flex space-x-4 items-center">
        <a href="https://mail.google.com" className="link">
          Gmail
        </a>
        <Link href="/search?term=google&searchType=Images&start=1">
          <a className="link">Hình ảnh</a>
        </Link>
        <User />
      </div>
    </header>
  );
}

export default Header;
