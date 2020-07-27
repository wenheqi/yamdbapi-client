import React from "react"
import Layout from "../components/layout"

export default function GetKeyPage() {
  return (
    <Layout>
      <div className="h-100 d-flex flex-column justify-content-center align-items-center pageGenKey">
        <form className="w-100 px-2 d-flex flex-column flex-lg-row">
          <div className="form-label-group w-100 order-0 mr-lg-2">
            <input
              type="email"
              id="inputEmail"
              className="form-control"
              placeholder="Email address"
              aria-label="Email"
              aria-describedby="basic-addon1"
              required="true"
              autofocus="true"
            />
            <label for="inputEmail">Email address</label>
          </div>
          <div className="form-label-group w-100 order-1 order-lg-2">
            <input
              type="checkbox"
              id="checkboxAgree"
              className="mr-2"
              aria-label="Checkbox for agreeing term of service, privacy policy and service agreement"
              required="true"
            />
            <label className="d-inline" for="checkboxAgree">
              I have read and agree to the Terms of Service, Privacy Policy and
              Service Agreement of this website and service
            </label>
          </div>
          <div className="form-label-group w-100 order-2 order-lg-1">
            <button class="btn btn-lg btn-primary btn-block" type="submit">
              Generate API Key
            </button>
          </div>
        </form>
      </div>
    </Layout>
  )
}
