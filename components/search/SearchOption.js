import React from "react";
import { useRouter } from "next/router";

function SearchOption({ Icon, title, selected, searchValue }) {
  const router = useRouter();
  const { term, start } = router.query;

  const selectedClass = selected
    ? "text-blue-500 border-blue-600"
    : "border-transparent";

  const addSearchTypeHandler = () => {
    router.push(
      `/search?term=${term}&searchType=${searchValue}&start=${start}`
    );
  };

  return (
    <div
      onClick={addSearchTypeHandler}
      className={`flex flex-row space-x-2 items-center  text-sm mr-7 pb-3 text-[#5f6368] cursor-pointer border-b-4 ${selectedClass} `}
    >
      <Icon className="h-4 px-1" />
      <p className="font-normal ">{title}</p>
    </div>
  );
}

export default SearchOption;
