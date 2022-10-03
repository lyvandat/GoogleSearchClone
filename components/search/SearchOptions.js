import React from "react";
import { useRouter } from "next/router";
import {
  MagnifyingGlassIcon,
  PhotoIcon,
  PlayCircleIcon,
  NewspaperIcon,
  Location,
  MapPinIcon,
} from "@heroicons/react/24/outline";

import SearchOption from "./SearchOption";

const CONTENT_SEARCH_TYPE = "All";
const IMAGE_SEARCH_TYPE = "Images";
const VIDEO_SEARCH_TYPE = "Videos";
const NEWSPAPER_SEARCH_TYPE = "Newspaper";
const MAP_SEARCH_TYPE = "Maps";

function SearchOptions() {
  const router = useRouter();

  const searchType = router.query.searchType;

  return (
    <div className="lg:ml-[200px] md:ml-[120px] flex flex-row md:justify-start justify-center">
      <SearchOption
        Icon={MagnifyingGlassIcon}
        title="Tất cả"
        selected={searchType === "" || searchType === CONTENT_SEARCH_TYPE}
        searchValue={CONTENT_SEARCH_TYPE}
      />
      <SearchOption
        Icon={PhotoIcon}
        title="Hình ảnh"
        selected={searchType === IMAGE_SEARCH_TYPE}
        searchValue={IMAGE_SEARCH_TYPE}
      />
      <SearchOption
        Icon={PlayCircleIcon}
        title="Video"
        selected={searchType === VIDEO_SEARCH_TYPE}
        searchValue={VIDEO_SEARCH_TYPE}
      />
      <SearchOption
        Icon={NewspaperIcon}
        title="Tin tức"
        selected={searchType === NEWSPAPER_SEARCH_TYPE}
        searchValue={NEWSPAPER_SEARCH_TYPE}
      />
      <SearchOption
        Icon={MapPinIcon}
        title="Maps"
        selected={searchType === MAP_SEARCH_TYPE}
        searchValue={MAP_SEARCH_TYPE}
      />
    </div>
  );
}

export default SearchOptions;
