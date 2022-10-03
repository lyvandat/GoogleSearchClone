import { useRouter } from "next/router";
import { useState, useRef } from "react";

import React from "react";
import Image from "next/image";

import User from "../User";
import SearchOptions from "./SearchOptions";

import {
  MagnifyingGlassIcon,
  XMarkIcon,
  MicrophoneIcon,
  ClipboardDocumentIcon,
  Bars3BottomRightIcon,
} from "@heroicons/react/24/solid";

import { Cog8ToothIcon } from "@heroicons/react/24/outline";

function SearchHeader() {
  const router = useRouter();
  const inputRef = useRef(null);
  const { term } = router.query;

  const [searchValue, setSearchValue] = useState(term);

  const searchHeaderInputHandler = (e) => {
    setSearchValue((prevState) => e.target.value);
  };

  const deleteSearchValueHandler = (e) => {
    setSearchValue((prevState) => "");
    inputRef.current.focus();
  };

  const submitSearchHandler = (e) => {
    e.preventDefault();

    const reEnteredValue = searchValue.trim();
    const searchType = router.query.searchType;

    if (!reEnteredValue) return;

    router.push(
      `/search?term=${reEnteredValue}&searchType=${searchType}&start=1`
    );
  };

  const isDeleteIcon = !!searchValue;

  return (
    <div className="sticky left-0 top-0 border-b border-gray-200 bg-white max-w-max">
      <form
        onSubmit={submitSearchHandler}
        className="flex lg:px-11 lg:py-6 px-2 py-4 items-center w-screen"
      >
        <div className="hidden sm:block w-full max-w-[92px]">
          <Image
            onClick={() => router.push("/")}
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
            width="92"
            height="32"
            alt="google-logo"
            layout="responsive"
            priority={true}
          ></Image>
        </div>

        <div className="flex flex-row lg:ml-11 sm:ml-3 mr-1 items-center border border-gray-200 rounded-full px-5 py-3 w-full max-w-[694px] shadow-lg">
          <input
            className="flex-grow focus:outline-none text-base leading-none "
            type="text"
            onInput={searchHeaderInputHandler}
            value={searchValue}
            ref={inputRef}
          ></input>
          <XMarkIcon
            onClick={deleteSearchValueHandler}
            className={`${
              isDeleteIcon ? "" : "opacity-0 pointer-events-none"
            } h-6 stroke-gray-500 text-gray-400`}
          />
          <ClipboardDocumentIcon className="h-5 md:pl-3 md:ml-4 pl-2 ml-3 border-l border-gray-300 text-gray-500" />
          <MicrophoneIcon className="h-5 md:px-6 px-2 text-blue-500 hidden sm:inline-block" />
          <MagnifyingGlassIcon className="h-5 text-blue-400 stroke-blue-500 hidden sm:inline-block" />
        </div>
        <div className="flex items-center ml-auto">
          <Cog8ToothIcon className="w-10 h-10 p-2 hover:bg-gray-100 rounded-full text-gray-600 stroke-2 stroke-gray-600 flex-shrink-0 hidden sm:inline-flex" />
          <Bars3BottomRightIcon className="w-10 h-10 p-2 hover:bg-gray-100 rounded-full text-gray-600 stroke-gray-600 mr-1 ml-1 flex-shrink-0 hidden sm:inline-flex" />
          <User className="block ml-auto whitespace-nowrap" />
        </div>
        <button type="submit" hidden></button>
      </form>
      <SearchOptions />
    </div>
  );
}

export default SearchHeader;
