import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <section id="hero">
        <div
          className="d-flex flex-column justify-content-center align-items-center px-3 py-3 vh-100"
          style={{ backgroundColor: "aliceblue" }}
        >
          <h2>
            YamDB is a simple yet powerful API connecting millions of movies,
            posters and more.
          </h2>
          <div className="d-flex flex-column justify-content-center align-items-stretch">
            <button
              className="btn btn-primary mt-5 mb-2"
              onClick={() => scrollTo("#signup")}
            >
              GET FREE KEY
            </button>
            <button
              className="btn btn-primary mt-2"
              onClick={() => scrollTo("#documentation")}
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
      <section
        id="documentation"
        className="vh-100"
        style={{ backgroundColor: "lightyellow" }}
      >
        <div>
          <code>https://api.yamdbapi.com?key=YOUR_API_KEY&id=tt0000001</code>
          <p>Usage:</p>
          <p>table to illustrate the usage</p>
        </div>
      </section>
      <section
        id="signup"
        className="vh-100"
        style={{ backgroundColor: "paleturquoise" }}
      >
        <h1>All we need is just an email.</h1>
        <form>
          <input type="email" />
          <button>Get Free Key</button>
        </form>
      </section>
    </Layout>
  )
}
