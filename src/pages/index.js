import React, { useEffect, useState } from "react"
import Layout from "../components/Layout"
import axios from "axios"
import SearchBar from "../components/SearchBar"
import SearchResults from "../components/SearchResults"
import Nominations from "../components/Nominations"

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [nominations, setNominations] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    try {
      setLoading(true)
      const data = await axios.get(
        `http://www.omdbapi.com/?apikey=${process.env.API_KEY}&s=${searchTerm}`
      )
      setSearchResults(data.data.Search)
      setLoading(false)
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
      <section className="mx-auto w-8/12 h-1/3 flex justify-between flex-col sm:flex-row">
        <SearchResults
          searchResults={searchResults}
          searchTerm={searchTerm}
          handleNomination={handleNomination}
          loading={loading}
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
