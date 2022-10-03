import React from "react";

import { signIn, signOut, useSession } from "next-auth/react";
import { getProviders } from "next-auth/react";
import Header from "../../components/Header";
import Image from "next/image";

// import { Container } from './styles';

function signin(props) {
  const providers = props.providers;
  return (
    <div>
      <Header></Header>
      {Object.values(providers).map((provider) => {
        return (
          <div
            key={provider.name}
            className="mt-[100px] flex flex-col items-center"
          >
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png"
              width="270"
              height="86"
              alt="google-logo"
            ></Image>
            <p className="mt-4 font-sans font-medium text-base text-gray-500">
              This website is for learning purposes
            </p>
            <button
              onClick={() => {
                signIn(provider.id, { callbackUrl: "/" });
              }}
              className="mt-6 font-medium bg-rose-400 px-6 py-2 rounded-full text-[#fff]"
            >
              Sign in with {provider.name}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers,
    },
  };
}

export default signin;
