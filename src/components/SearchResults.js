import React from "react"
import styled from "styled-components"
import ResultItem from "./ResultItem"

const ResultList = styled.ul`
  max-height: 400px;
  overflow-y: scroll;
`

const SearchResults = ({ searchResults, searchTerm, handleNomination }) => {
  return (
    <div className="bg-gray-200 w-6/12 md:w-12/12 py-5 pl-3 rounded">
      <h3 className="text-lg uppercase text-gray-700 font-bold mb-3">
        Results for{" "}
        <span className="underline font-extrabold">{searchTerm}</span>
      </h3>

      {typeof searchResults !== "undefined" && searchResults.length > 0 ? (
        <>
          <ResultList>
            {searchResults.map(result => (
              <ResultItem
                key={result.imdbID}
                result={result}
                handleNomination={handleNomination}
              ></ResultItem>
            ))}
          </ResultList>
          <div className="text-center my-2">
            <small className="text-gray-500">
              Series = 🎞{"  "}|{"  "}Movie = 📽
            </small>
          </div>
        </>
      ) : (
        <p>Nothing to show here…</p>
      )}
    </div>
  )
}

export default SearchResults
