import React from "react"
import styled from "styled-components"
import ResultItem from "./ResultItem"

const ResultList = styled.ul`
  max-height: 400px;
  overflow-y: scroll;
  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.1);
    background-color: #f5f5f5;
    border-radius: 4px;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #2f855a;
  }
`

const Loader = styled.div`
  border: 2px solid #fff; 
  border-top: 2px solid #2f855a; 
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 1.5s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

const SearchResults = ({
  searchResults,
  searchTerm,
  handleNomination,
  loading,
}) => {
  return (
    <div className="bg-gray-200 w-full md:w-6/12 py-5 pl-3 rounded">
      <h3 className="text-lg uppercase text-gray-700 font-bold mb-3">
        Results for{" "}
        <span className="underline font-extrabold">{searchTerm}</span>
      </h3>
      {loading ? (
        <div className="flex justify-center items-center w-100">
          <Loader />
        </div>
      ) : (
        <>
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
        </>
      )}
    </div>
  )
}

export default SearchResults
