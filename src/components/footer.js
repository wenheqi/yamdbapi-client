import React from "react"

export default function Footer() {
  return (
    <footer className="d-flex flex-row justify-content-center align-items-center py-5">
      <span>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </span>
    </footer>
  )
}
