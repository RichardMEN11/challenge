import React, { useState } from "react"
import styled from "styled-components"

const ListItem = styled.li`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:nth-child(odd) {
    background-color: rgba(55, 65, 81, 5%);
  }
  > button:disabled {
    background-color: rgba(55, 65, 81, 10%);
    cursor: not-allowed;
  }
`

const ResultItem = ({ result, handleNomination }) => {
  const [isDisabled, setIsDisabled] = useState(false)

  return (
    <ListItem key={result.imdbID} className="text-left">
      <div className="text-left">
        <p>
          {result.Type === "movie" ? "📽" : "🎞"} {result.Title}
        </p>
        <small className="text-gray-500 block">{result.Year}</small>
      </div>
      <button
        onClick={() => {
          handleNomination(result)
          setIsDisabled(true)
        }}
        className="text-sm bg-green-700 p-2 rounded text-white disabled:text-red"
        disabled={isDisabled}
      >
        Nominate
      </button>
    </ListItem>
  )
}

export default ResultItem
