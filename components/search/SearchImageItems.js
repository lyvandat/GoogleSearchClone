import React from "react";
import Link from "next/link";

function SearchImageItems(props) {
  return (
    <ul className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:space-x-4 sm:space-x-3 space-x-1 w-full px-5">
      {props.items?.map((item) => (
        <li
          key={Math.random(100000).toString()}
          className="group h-[222px] mb-4"
        >
          <Link href={item.image.contextLink}>
            <a>
              <div className="overflow-hidden h-[80%] group-hover:drop-shadow-lg bg-[#EFEFEF] px-2">
                <img
                  src={item.link}
                  alt={item.title}
                  className="object-contain w-full h-full"
                />
              </div>

              <div className="group">
                <h2 className="group-hover:underline truncate text-gray-800 text-[13px] font-medium">
                  {item.title}
                </h2>
                <address className="group-hover:underline text-gray-800 text-[12px]">
                  {item.displayLink}
                </address>
              </div>
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SearchImageItems;
