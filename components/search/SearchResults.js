import React from "react";

// import { Container } from './styles';

function SearchResults(props) {
  return (
    <p className="lg:ml-[200px] md:ml-[120px] md:text-start text-center pt-3 pb-6 text-gray-500 text-sm">
      {props.searchInformation &&
        `Khoảng ${props.searchInformation?.formattedTotalResults} kết quả (
      ${props.searchInformation?.formattedSearchTime} giây)`}
      {!props.searchInformation && "không tìm thấy kết quả"}
    </p>
  );
}

export default SearchResults;
