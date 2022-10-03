import React from "react";
import { useRouter } from "next/router";

import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";

function SearchPagination(props) {
  const router = useRouter();
  let start = +router.query.start;
  const term = router.query.term;
  const searchType = router.query.searchType;

  function nextPageHandler() {
    start += 10;
    router.push(`/search?term=${term}&searchType=${searchType}&start=${start}`);
  }

  function prevPageHandler() {
    start -= 10;
    router.push(`/search?term=${term}&searchType=${searchType}&start=${start}`);
  }

  const alignPagination =
    searchType === "Images" ? "" : "lg:ml-[200px] md:ml-[120px] md:px-0";

  return (
    <section
      className={`px-5 md:justify-start justify-center flex flex-row space-x-8 mb-11 text-[#1a0dab] ${alignPagination}`}
    >
      {start > 10 && (
        <div
          onClick={prevPageHandler}
          className="flex flex-col hover:underline items-center cursor-pointer"
        >
          <ChevronLeftIcon className="h-6 font-medium stroke-3 stroke-[#1a0dab]" />
          <span>Previous</span>
        </div>
      )}
      {start < 91 && (
        <div
          onClick={nextPageHandler}
          className="flex flex-col hover:underline items-center cursor-pointer"
        >
          <ChevronRightIcon className="h-6 font-medium stroke-3 stroke-[#1a0dab]" />
          <span>Next</span>
        </div>
      )}
    </section>
  );
}

export default SearchPagination;
