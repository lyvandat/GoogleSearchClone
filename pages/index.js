import { useRef } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import Link from "next/link";

import { MagnifyingGlassIcon, MicrophoneIcon } from "@heroicons/react/24/solid";
import React from "react";

export default function Home() {
  const inputRef = useRef(null);
  const router = useRouter();

  const searchHandler = (e) => {
    e.preventDefault();

    const searchValue = inputRef.current.value.trim();

    if (!searchValue) return;

    router.push(`/search?term=${searchValue}&searchType=&start=1`);
  };

  return (
    <div className="relative h-screen">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header />

      {/* body */}
      <section className="flex flex-col items-center max-w-[90%] ml-auto mr-auto mt-[100px]">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
          width="270"
          height="86"
          alt="google-logo"
        ></Image>
        <form
          autoComplete="off"
          className="flex flex-row items-center mt-7 w-[100%] max-w-[584px] rounded-full border-2 border-gray-200 pl-3 pr-4 py-2 hover:shadow-lg"
        >
          <MagnifyingGlassIcon className=" stroke-gray-500 h-4 text-gray-500" />
          <input
            autoComplete="off"
            ref={inputRef}
            className="flex-1 focus:outline-none ml-3 font-sans text-base leading-none"
            type="text"
          ></input>
          <MicrophoneIcon className="h-5 text-gray-600" />
          <button type="submit" hidden onClick={searchHandler}></button>
        </form>
        <div className="flex flex-col space-y-3 mt-6 sm:flex-row sm:space-x-3 sm:space-y-0">
          <Link href="/">
            <a className="button">Tìm trên google</a>
          </Link>
          <a href="https://www.google.com/doodles" className="button">
            Xem trang đầu tiên tìm được
          </a>
        </div>
      </section>
      {/* footer */}
      <footer className="absolute bottom-0 left-[50%] translate-x-[-50%] p-4">
        <div className="text-base font-normal italic text-gray-600 ">
          Copyright &copy; {new Date().getFullYear()} By Ly Van Dat
        </div>
      </footer>
    </div>
  );
}
