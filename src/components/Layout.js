import React from "react"
import SEO from "./SEO"

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div className="flex flex-col min-h-screen">
        <header className="p-4 bg-green-700 text-white font-semibold">
          <h1 className="max-w-4xl mx-auto">The Shoppies</h1>
        </header>
        {children}
        <footer className="py-2 text-center text-gray-600 text-xs">
          Made by <a href="https://github.com/RichardMEN11">Richard Menning</a>
        </footer>
      </div>
    </>
  )
}

export default Layout
