import Parser from "html-react-parser";
import React from "react";
import Link from "next/link";

function SearchContentItems(props) {
  return (
    <ul className="lg:ml-[200px] md:ml-[120px] px-3 md:px-0 w-full max-w-3xl">
      {props.items?.map((item) => (
        <li key={Math.random(100000).toString()} className="mb-10">
          <Link href={item.link}>
            <a>
              <div className="group text-[#1a0dab]">
                <p className="text-sm text-black mb-1">{item.formattedUrl}</p>
                <h2 className="group-hover:underline text-xl">{item.title}</h2>
              </div>
              <p>{Parser(item.htmlSnippet)}</p>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SearchContentItems;
