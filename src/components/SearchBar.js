import React from "react"

const SearchBar = ({ handleSubmit, setSearchTerm, searchTerm }) => {
  return (
    <section className="w-full h-1/3 flex justify-center">
      <form
        className="bg-gray-200 w-8/12 my-10 p-10 rounded"
        onSubmit={e => {
          e.preventDefault()
          handleSubmit()
        }}
      >
        <label
          htmlFor="title"
          className="block mb-2 text-lg text-gray-700 uppercase font-bold"
        >
          Movie Title{" "}
          <span role="img" aria-label="emoji">
            🎬
          </span>
        </label>
        <input
          type="text"
          name="title"
          onChange={e => {
            setSearchTerm(e.target.value)
            handleSubmit()
          }}
          value={searchTerm}
          className="py-2 px-3 w-10/12 rounded-l text-grey-darkest"
        />
        <input
          type="submit"
          value="Search 🔎"
          className="bg-gray-600 py-2 px-6 text-white rounded-r font-bold cursor-pointer hover:bg-gray-500"
        />
        <small className="text-gray-500 text-center block mt-1">
          Please add a title you would like to search for.
        </small>
      </form>
    </section>
  )
}

export default SearchBar
