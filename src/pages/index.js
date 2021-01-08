import React, { useState } from "react"
import Layout from "../components/Layout"
import axios from "axios"
import SearchBar from "../components/SearchBar"
import SearchResults from "../components/SearchResults"
import Nominations from "../components/Nominations"
import Swoosh from "../sounds/Swoosh.mp3"
import Boing from "../sounds/Boing.mp3"

const IndexPage = () => {
  const [searchTerm, setSearchTerm] = useState("")
  const [searchResults, setSearchResults] = useState([])
  const [nominations, setNominations] = useState([])
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    try {
      setLoading(true)
      const data = await axios.get(
        `https://www.omdbapi.com/?apikey=7cd8fb3e&s=${searchTerm}`
      )
      setSearchResults(data.data.Search)
      setLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  const handleNomination = result => {
    if (nominations.length < 5) {
      const audio = new Audio(Swoosh)
      audio.play()

      setNominations(prevNominations => [...prevNominations, result])
    }
  }

  const handleDeleteNomination = nomination => {
    const tmpNominations = nominations.filter(
      n => n.imdbID !== nomination.imdbID
    )

    const audio = new Audio(Boing)
    audio.play()

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
