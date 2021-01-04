import React from "react"

const Nominations = ({ nominations, handleDeleteNomination }) => {
  return (
    <div className="bg-gray-200  w-5/12 py-5 pl-3 rounded">
      <h3 className="text-lg uppercase text-gray-700 font-bold mb-1">
        Nominations <span role="img">⭐️</span>
      </h3>
      <small className="text-gray-500 text-center block mt-1">
        {nominations.length > 0 ? nominations.length : 0}/5
      </small>
      <ul className="list-decimal list-inside">
        {nominations.map(nomination => (
          <li
            key={nomination.imdbID}
            className="font-bold text-gray-800 px-2 py-3 hover:line-through"
            onClick={() => {
              handleDeleteNomination(nomination)
            }}
          >
            {nomination.Title}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Nominations
