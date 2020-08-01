import React, { useState } from "react"
import axios from "axios"

export default function SignUpForm({ className }) {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [buttonText, setButtonText] = useState(`Get API Key`)

  const onChangeHandler = e => {
    setEmail(e.target.value)
    setIsValidEmail(/^\S+@\S+\.\S+$/.test(e.target.value))
    setButtonText(`Get API Key`)
  }

  const onClickHandler = e => {
    setAgreed(oldStatus => !oldStatus)
  }

  const onSubmitHandler = e => {
    e.preventDefault()
    let count = 0
    const handler = setInterval(() => {
      if (count >= 4) {
        count -= 4
      }
      if (count % 4 === 0) {
        setButtonText(`Generating`)
      } else if (count % 4 === 1) {
        setButtonText(`Generating.`)
      } else if (count % 4 === 2) {
        setButtonText(`Generating..`)
      } else if (count % 4 === 3) {
        setButtonText(`Generating...`)
      }
      count++
    }, 500)
    const url =
      "https://dof0g44aek.execute-api.us-west-1.amazonaws.com/prod/user"
    const data = { email }
    const config = {}
    axios
      .post(url, data, config)
      .then(res => {
        clearInterval(handler)
        setButtonText("Sent")
      })
      .catch(err => {
        clearInterval(handler)
        setButtonText("Failed")
      })
  }

  return (
    <form
      className={`signUpForm d-flex flex-column justify-content-center align-items-stretch flex-lg-row align-items-lg-start ${
        className ? ` ${className}` : ""
      }`}
    >
      <div className="d-flex flex-column justify-content-center">
        <div className="form-group">
          <div className="form-label-group">
            <input
              type="email"
              className={`form-control${isValidEmail ? `` : ` invalid`}`}
              placeholder="Email address"
              id="signUpFormEmail"
              aria-describedby="emailHelp"
              onChange={onChangeHandler}
              value={email}
            />
            <label htmlFor="signUpFormEmail">Email address</label>
          </div>
        </div>
        <div className="form-group form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="agreementCheck"
            checked={agreed}
            onClick={onClickHandler}
          />
          <label className="form-check-label" htmlFor="agreementCheck">
            I have read and agree to the Terms of Service, Privacy Policy and
            Service Agreement of this website and service.
          </label>
        </div>
      </div>
      <button
        type="submit"
        className="btn mx-lg-2"
        disabled={!agreed || !isValidEmail || buttonText === "Sent"}
        onClick={onSubmitHandler}
      >
        {buttonText}
      </button>
    </form>
  )
}
