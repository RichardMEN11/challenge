import React, { useState } from "react"
import Layout from "../components/Layout"
import axios from "axios"

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [nominations, setNominations] = useState([])

  const handleSubmit = async e => {
    try {
      const data = await axios.get(
        `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchTerm}`
      )
      setSearchResults(data.data.Search)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <Layout>
      <section className="w-full h-1/3 flex justify-center">
        <form
          className="bg-gray-200 w-8/12 my-10 p-10 rounded"
          onSubmit={e => {
            e.preventDefault()
            handleSubmit()
          }}
        >
          <label htmlFor="title" className="block mb-2">
            Movie Title
          </label>
          <input
            type="text"
            name="title"
            onChange={e => {
              setSearchTerm(e.target.value)
            }}
            value={searchTerm}
            className="py-2 px-1 w-10/12 rounded"
          />
          <input type="submit" value="Search" className="ml-3" />
        </form>
      </section>
      <section className="mx-auto w-8/12 h-1/3 flex justify-between">
        <div className="bg-gray-200 w-5/12">
          <h3>Results for {searchTerm}</h3>
          <ul>
            {searchResults.map(result => (
              <li key={result.Title}>
                {result.Title}{" "}
                <button
                  onClick={() => {
                    setNominations(prevNominations => [
                      ...prevNominations,
                      result,
                    ])
                  }}
                >
                  Nominate
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-gray-200 w-5/12">
          <h3>Nominations</h3>
          <ul>
            {nominations.map(nomination => (
              <li key={nomination.Title}>{nomination.Title}</li>
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
