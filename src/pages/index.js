import React, { useState } from "react"
import Layout from "../components/Layout"
import axios from "axios"
import SearchBar from "../components/SearchBar"

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
      <SearchBar
        handleSubmit={handleSubmit}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
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
