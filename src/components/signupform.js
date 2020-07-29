import React from "react"

export default function SignUpForm({ className }) {
  return (
    <form
      className={`signUpForm d-flex flex-column align-item-stretch${
        className ? ` ${className}` : ""
      }`}
    >
      <div class="form-group">
        <input
          type="email"
          class="form-control"
          placeholder="Email address"
          id="signUpFormEmail"
          aria-describedby="emailHelp"
        />
        <label htmlFor="signUpFormEmail">Email address</label>
        <small id="emailHelp" class="form-text text-muted">
          We'll never share your email with anyone else.
        </small>
      </div>
      <div class="form-group form-check">
        <input type="checkbox" class="form-check-input" id="agreementCheck" />
        <label class="form-check-label" htmlFor="agreementCheck">
          I have read and agree to the Terms of Service, Privacy Policy and
          Service Agreement of this website and service.
        </label>
      </div>
      <button type="submit" class="btn">
        Get API Key
      </button>
    </form>
  )
}
