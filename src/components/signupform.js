import React from "react"

export default function SignUpForm({ className }) {
  return (
    <form
      className={`signUpForm d-flex flex-column justify-content-center align-items-stretch flex-lg-row align-items-lg-start ${
        className ? ` ${className}` : ""
      }`}
    >
      <div clasName="d-flex flex-column justify-content-center align-items-center">
        <div className="form-group">
          <div className="form-label-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email address"
              id="signUpFormEmail"
              aria-describedby="emailHelp"
            />
            <label htmlFor="signUpFormEmail">Email address</label>
          </div>
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreementCheck"
          />
          <label className="form-check-label" htmlFor="agreementCheck">
            I have read and agree to the Terms of Service, Privacy Policy and
            Service Agreement of this website and service.
          </label>
        </div>
      </div>
      <button type="submit" className="btn mx-lg-2">
        Get API Key
      </button>
    </form>
  )
}
