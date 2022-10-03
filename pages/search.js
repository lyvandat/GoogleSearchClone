import React from "react";
import { useRouter } from "next/router";

import SearchHeader from "../components/search/SearchHeader";
import Head from "next/head";
import SearchContentItems from "../components/search/SearchContentItems";
import SearchImageItems from "../components/search/SearchImageItems";
import SearchResults from "../components/search/SearchResults";
import SearchPagination from "../components/search/SearchPagination";

// API_KEY, CX(search engine ID) : https://developers.google.com/custom-search/v1/using_rest

function Search({ data }) {
  const router = useRouter();
  const { searchType } = router.query;
  return (
    <section className="overflow-hidden">
      <Head>
        <title>Search Google</title>
        <meta
          name="description"
          content="search everything you want to search!!!"
        />
        <meta charset="utf-8" />
      </Head>

      {/* Search Header */}
      <SearchHeader />

      {/* Search results */}
      <SearchResults searchInformation={data.searchInformation} />

      {/* Search Items by content */}
      {(searchType === "" || searchType === "All") && (
        <SearchContentItems items={data.items} />
      )}

      {/* Search Items by image */}
      {searchType === "Images" && <SearchImageItems items={data.items} />}

      {/* Search Pagination */}
      <SearchPagination />
    </section>
  );
}

export async function getServerSideProps(context) {
  let { searchType, term, start } = context.query;

  // gg gioi han so lan request 1 ngay
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CX
    }&q=${term}${
      searchType === "Images" ? "&searchType=image" : ""
    }&start=${start}`
  ).then((res) => res.json());

  return {
    props: {
      data,
    },
  };
}

export default Search;
