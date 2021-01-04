import React, { useState } from "react"
import Layout from "../components/Layout"
import axios from "axios"
import SearchBar from "../components/SearchBar"
import SearchResults from "../components/SearchResults"
import Nominations from "../components/Nominations"

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [nominations, setNominations] = useState([])

  const handleSubmit = async e => {
    try {
      const data = await axios.get(
        `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${searchTerm}`
      )
      setSearchResults(data.data.Search)
    } catch (error) {
      console.log(error)
    }
  }

  const handleNomination = result => {
    if (nominations.length < 5) {
      setNominations(prevNominations => [...prevNominations, result])
    }
  }

  const handleDeleteNomination = nomination => {
    const tmpNominations = nominations.filter(
      n => n.imdbID !== nomination.imdbID
    )
    setNominations(tmpNominations)
  }
  return (
    <Layout>
      <SearchBar
        handleSubmit={handleSubmit}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <section className="mx-auto w-8/12 h-1/3 flex justify-between">
        <SearchResults
          searchResults={searchResults}
          searchTerm={searchTerm}
          handleNomination={handleNomination}
          disabled={nominations.length >= 5 ? true : false}
        />
        <Nominations
          nominations={nominations}
          handleDeleteNomination={handleDeleteNomination}
        />
      </section>
    </Layout>
  )
}

export default IndexPage
