import React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"
import Layout from "../components/layout"
import SignUpForm from "../components/signupform"

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
              className="btn mt-5 mb-2"
              onClick={() => scrollTo("#signup")}
            >
              GET FREE API KEY
            </button>
            <button className="btn mt-2" onClick={() => scrollTo("#usage")}>
              LEARN MORE
            </button>
          </div>
        </div>
      </section>
      <section id="usage">
        <div
          className="min-vh-100 px-2 py-4"
          style={{ backgroundColor: "lightyellow" }}
        >
          <h2>YamDB API is super easy to use.</h2>
          <p>
            Append query parameters along with API key to the HTTP endpoint,
            YamDB will return all the data fulfill your query in JSON format.
          </p>
          <p>For example:</p>
          <code className="d-block px-2 py-2 mb-3">
            {/* TODO: replace with real request URL */}
            {`https://www.yamdbapi.com?key=YOUR_API_KEY&id=tt7653254`}
          </code>
          <p>returns</p>
          <code className="d-block px-2 py-2 mb-3">
            {/* TODO: replace with real response, should have status and an array */}
            <pre>
              {`{
  "@context": "http://schema.org",
  "@type": "Movie",
  "url": "/title/tt7653254/",
  "name": "Marriage Story",
  "image": "https://m.media-amazon.com/images/M/MV5BZGVmY2RjNDgtMTc3Yy00YmY0LTgwODItYzBjNWJhNTRlYjdkXkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
  "genre": [
    "Comedy",
    "Drama",
    "Romance"
  ],
  "contentRating": "R",
  "actor": [
    {
      "@type": "Person",
      "url": "/name/nm3485845/",
      "name": "Adam Driver"
    },
    {
      "@type": "Person",
      "url": "/name/nm0424060/",
      "name": "Scarlett Johansson"
    },
    {
      "@type": "Person",
      "url": "/name/nm5005121/",
      "name": "Julia Greer"
    },
    {
      "@type": "Person",
      "url": "/name/nm7309485/",
      "name": "Azhy Robertson"
    }
  ],
  "director": {
    "@type": "Person",
    "url": "/name/nm0000876/",
    "name": "Noah Baumbach"
  },
  "creator": [
    {
      "@type": "Person",
      "url": "/name/nm0000876/",
      "name": "Noah Baumbach"
    },
    {
      "@type": "Organization",
      "url": "/company/co0159772/"
    },
    {
      "@type": "Organization",
      "url": "/company/co0144901/"
    }
  ],
  "description": "Marriage Story is a movie starring Adam Driver, Scarlett Johansson, and Julia Greer. Noah Baumbach\u0027s incisive and compassionate look at a marriage breaking up and a family staying together.",
  "datePublished": "2019-11-28",
  "keywords": "infidelity,new york city,brooklyn new york city,los angeles california,actress",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingCount": 222731,
    "bestRating": "10.0",
    "worstRating": "1.0",
    "ratingValue": "8.0"
  },
  "duration": "PT2H17M",
  "trailer": {
    "@type": "VideoObject",
    "name": "Official Trailer",
    "embedUrl": "/video/imdb/vi2650521369",
    "thumbnail": {
      "@type": "ImageObject",
      "contentUrl": "https://m.media-amazon.com/images/M/MV5BYWE2N2JlZGYtYTNjZC00NDY1LThjZjctYzBjOTdiMmE1YzY4XkEyXkFqcGdeQWFybm8@._V1_.jpg"
    },
    "thumbnailUrl": "https://m.media-amazon.com/images/M/MV5BYWE2N2JlZGYtYTNjZC00NDY1LThjZjctYzBjOTdiMmE1YzY4XkEyXkFqcGdeQWFybm8@._V1_.jpg",
    "description": "An incisive and compassionate portrait of a marriage breaking up and a family staying together. From Academy Award-nominated filmmaker Noah Baumbach and starring Scarlett Johansson, Adam Driver, Laura Dern, Alan Alda and Ray Liotta.",
    "uploadDate": "2019-10-17T23:31:51Z"
  }
}`}
            </pre>
          </code>
          <div className="d-flex flex-column justify-content-center align-items-center py-5">
            <a href="/documentation">
              <button className="btn">See Full Parameters</button>
            </a>
          </div>
        </div>
      </section>
      <section id="signup">
        <div
          className="d-flex flex-column justify-content-center align-items-center px-3 py-3 vh-100"
          style={{ backgroundColor: "paleturquoise" }}
        >
          <h2>To get a free API key, all you need is just an email address.</h2>
          <SignUpForm className="mt-1" />
        </div>
      </section>
    </Layout>
  )
}
