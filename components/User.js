import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";

function User({ className }) {
  const { data: session } = useSession();

  if (!session) {
    return (
      <button
        type="button"
        onClick={() => signIn()}
        className={`${
          className ? className : ""
        } sm:py-2 sm:px-6 px-4 py-1 rounded-xl bg-[#6a5aff] text-white hover:brightness-110 hover:shadow-md `}
      >
        Sign in
      </button>
    );
  }

  return (
    <div
      onClick={() => signOut()}
      className={`${
        className ? className : ""
      } flex items-center justify-center rounded-full overflow-hidden hover:bg-gray-200 p-1 `}
    >
      <Image
        src={session.user.image}
        alt="user-photo"
        width={32}
        height={32}
        className="rounded-full"
      ></Image>
    </div>
  );
}

export default User;
