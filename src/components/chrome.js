import React from "react"

export default function Chrome() {
  return (
    <div className="chrome">
      <div className="tabBar">
        <div className="buttons">
          <div className="circle sunsetOrange"></div>
          <div className="circle pastelOrange"></div>
          <div className="circle malachite"></div>
        </div>
        <div className="tab"></div>
      </div>
      <div className="addressBar">
        <div className="address">
          <span className="url">
            {`https://yamdbapi.com?apikey=YOUR_API_KEY&id=tt0848228`}
          </span>
        </div>
      </div>
      <div className="webpageWindow">
        <pre>
          {`{
    "status": `}
          {"  "}
          <span className="green">"OK"</span>,
          {`
    "result": [
      {
        "_id": `}
          <span className="green">"tt0848228"</span>,
          {`
        "name": `}
          <span className="green">"The Avengers"</span>,
          {`
        "type": `}
          <span className="green">"Movie"</span>,
          {`
        "year": `}
          <span className="green">"2012"</span>,
          {`
        "duration": `}
          <span className="green">"PT2H23M"</span>,
          {`
        "contentRating": `}
          <span className="green">"PG-13"</span>,
          {`
        "poster": `}
          <span className="green">
            "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg"
          </span>
          ,
          {`
        "description": `}
          <span className="green">
            "The Avengers is a movie starring Robert Downey Jr., Chris Evans,
            and Scarlett Johansson. Earth's mightiest heroes must come together
            and learn to fight as a team if they are going to stop the
            mischievous Loki and his alien army from..."
          </span>
          ,
          {`
        "trailerThumbnail": `}
          <span className="green">
            "https://m.media-amazon.com/images/M/MV5BMTcwNTg1Nzg2MF5BMl5BanBnXkFtZTcwNDEwOTUwOA@@._V1_.jpg"
          </span>
          ,
          {`
        "imdbRating": {
          "bestRating": `}
          <span className="green">"10.0"</span>,
          {`
          "ratingCount": `}
          <span className="blue">1237044</span>,
          {`
          "worstRating": `}
          <span className="green">"1.0"</span>,
          {`
          "ratingValue": `}
          <span className="green">"8.0"</span>,
          {`
        },
        "genres": [
          `}
          <span className="green">"Action"</span>,
          {`
          `}
          <span className="green">"Adventure"</span>,
          {`
          `}
          <span className="green">"Sci-Fi"</span>
          {`
        ],
        "keywords": [
          `}
          <span className="green">"superhero"</span>,
          {`
          `}
          <span className="green">"marvel cinematic universe"</span>,
          {`
          `}
          <span className="green">"alien invasion"</span>,
          {`
          `}
          <span className="green">"s.h.i.e.l.d."</span>,
          {`
          `}
          <span className="green">"final battle"</span>
          {`
        ],
        "actors": [
          {
            "name": `}
          <span className="green">"Robert Downey Jr."</span>,
          {`
            "id": `}
          <span className="green">"nm0000375"</span>
          {`
          },
          {
            "name": `}
          <span className="green">"Chris Evans"</span>,
          {`
            "id": `}
          <span className="green">"nm0262635"</span>
          {`
          },
          {
            "name": `}
          <span className="green">"Scarlett Johansson"</span>,
          {`
            "id": `}
          <span className="green">"nm0424060"</span>
          {`
          },
          {
            "name": `}
          <span className="green">"Jeremy Renner"</span>,
          {`
            "id": `}
          <span className="green">"nm0719637"</span>
          {`
          }
        ],
        "creators": [
          {
            "name": `}
          <span className="green">"Joss Whedon"</span>,
          {`
            "id": `}
          <span className="green">"nm0923736"</span>
          {`
          },
          {
            "name": `}
          <span className="green">"Zak Penn"</span>,
          {`
            "id": `}
          <span className="green">"nm0672015"</span>
          {`
          },
          {
            "name": `}
          <span className="green">"Joss Whedon"</span>,
          {`
            "id": `}
          <span className="green">"nm0923736"</span>
          {`
          },
          {
            "name": `}
          <span className="green">"Organization"</span>,
          {`
            "id": `}
          <span className="green">"co0051941"</span>
          {`
          },
          {
            "name": `}
          <span className="green">"Organization"</span>,
          {`
            "id": `}
          <span className="green">"co0023400"</span>
          {`
          }
        ],
        "directors": [
          {
            "name" `}
          <span className="green">"Joss Whedon"</span>,
          {`
              "id": `}
          <span className="green">"nm0923736"</span>
          {`
          }
        ]
      }
    ]
}`}
        </pre>
      </div>
    </div>
  )
}
