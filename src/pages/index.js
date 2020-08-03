import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Layout from "../components/layout"
import SignUpForm from "../components/signupform"
import SEO from "../components/seo"
import Chrome from "../components/chrome"

export default function Home() {
  return (
    <Layout>
      <SEO title="YamDB - Yet Another Movie Database API" />
      <section id="hero">
        <div
          className="d-flex flex-column justify-content-center align-items-center px-3 py-3 vh-100"
          style={{ backgroundColor: "aliceblue" }}
        >
          <h2>
            YamDB is a simple yet powerful API connecting millions of movies,
            posters and more.
          </h2>
          <div className="d-flex flex-column justify-content-center align-items-stretch flex-lg-row">
            <button
              className="btn mt-5 mb-2 mr-lg-2"
              onClick={() => scrollTo("#signup")}
            >
              GET FREE API KEY
            </button>
            <button
              className="btn mt-2 mt-lg-5 mb-lg-2"
              onClick={() => scrollTo("#usage")}
            >
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
      <section id="usage">
        <div
          className="vh-100 d-flex flex-column flex-lg-row px-2 py-4"
          style={{ backgroundColor: "lightyellow" }}
        >
          <div className="d-flex flex-column flex-shrink-0 flex-lg-shrink-1 justify-content-center">
            <h2>YamDB API is super easy to use.</h2>
            <p>
              Append query parameters along with API key to the HTTP endpoint,
              YamDB will return all the data fulfill your query in JSON format.
            </p>
          </div>
          <div className="flex-lg-grow-1 d-flex flex-column justify-content-center align-items-center p-lg-5 overflow-auto">
            <Chrome />
          </div>
        </div>
      </section>
      <section id="signup">
        <div
          className="d-flex flex-column justify-content-center align-items-center px-3 py-3 vh-100"
          style={{ backgroundColor: "paleturquoise" }}
        >
          <h2>To get a free API key, all you need is just an email address.</h2>
          <SignUpForm className="mt-1 mt-lg-5" />
        </div>
      </section>
    </Layout>
  )
}
