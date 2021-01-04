import React from "react"
import styled from "styled-components"

const ResultList = styled.ul`
  max-height: 400px;
  overflow-y: scroll;
`

const ListItem = styled.li`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-child(odd) {
    background-color: rgba(55, 65, 81, 5%);
  }
`

const SearchResults = ({
  searchResults,
  searchTerm,
  handleNomination,
  disabled,
}) => {
  return (
    <div className="bg-gray-200 w-6/12 py-5 pl-3 rounded">
      <h3 className="text-lg uppercase text-gray-700 font-bold mb-3">
        Results for{" "}
        <span className="underline font-extrabold">{searchTerm}</span>
      </h3>
      <ResultList>
        {searchResults.map(result => (
          <ListItem key={result.imdbID} className="text-left">
            {result.Type === "movie" ? "📽" : "🎞"} {result.Title}
            {result.Year}
            <button
              onClick={() => {
                handleNomination(result)
              }}
              className="text-sm bg-green-700 p-2 rounded text-white disabled:bg-red"
              disabled={disabled}
            >
              Nominate
            </button>
          </ListItem>
        ))}
      </ResultList>
    </div>
  )
}

export default SearchResults
