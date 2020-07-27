import React from "react"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div>
        <div className="px-3">
          <h2>Movies, TV episodes and games</h2>
          <h4>
            YAMDB is a simple and lightweight API for millions of movies, TV
            episodes and games.
          </h4>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          <a>GET FREE KEY</a>
          <a>Learn more</a>
        </div>
      </div>
    </Layout>
  )
}
