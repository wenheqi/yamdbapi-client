import React from "react"
import Layout from "../components/layout"
import SignUpForm from "../components/signupform"

export default function GetKeyPage() {
  return (
    <Layout>
      <div className="h-100 d-flex flex-column justify-content-center align-items-center px-3 py-3 pageGenKey">
        <SignUpForm />
      </div>
    </Layout>
  )
}
