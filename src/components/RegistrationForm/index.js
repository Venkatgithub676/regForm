// Write your JS code here

import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    isLoggedIn: false,
    firstName: '',
    lastName: '',
    isFirstGiven: false,
    isLastGiven: false,
  }

  onSubmitRegForm = event => {
    event.preventDefault()
    const {firstName, lastName} = this.state

    if (firstName === '' && lastName === '') {
      console.log(1)
      this.setState({isLastGiven: true, isFirstGiven: true, isLoggedIn: false})
    } else if (firstName === '' && lastName !== '') {
      console.log(2)
      this.setState({isFirstGiven: true, isLastGiven: false, isLoggedIn: false})
    } else if (firstName !== '' && lastName === '') {
      console.log(3)
      this.setState({isLastGiven: true, isFirstGiven: false, isLoggedIn: false})
    } else {
      console.log(firstName, lastName)
      this.setState({
        isLoggedIn: true,
        firstName: '',
        lastName: '',
        isFirstGiven: false,
        isLastGiven: false,
      })
    }
  }

  onClickSubmitAgain = () => {
    this.setState({isLoggedIn: false})
  }

  onBlurFirstName = event => {
    if (event.target.value === '') {
      this.setState({isFirstGiven: true, firstName: ''})
    } else {
      this.setState({isFirstGiven: false, firstName: event.target.value})
    }
  }

  onBlurLastName = event => {
    if (event.target.value === '') {
      this.setState({isLastGiven: true, lastName: ''})
    } else {
      this.setState({isLastGiven: false, lastName: event.target.value})
    }
  }

  render() {
    const {isLoggedIn, isFirstGiven, isLastGiven} = this.state
    console.log(isLoggedIn)
    const res1 = isFirstGiven ? 'input-err-el' : ''
    const res2 = isLastGiven ? 'input-err-el' : ''
    const formEl = (
      <form onSubmit={this.onSubmitRegForm} className="form-con">
        <label htmlFor="firstName" className="label-el">
          FIRST NAME
        </label>
        <input
          className={`input-el ${res1}`}
          id="firstName"
          placeholder="First name"
          type="text"
          onBlur={this.onBlurFirstName}
        />
        {isFirstGiven && <p className="err">*Required</p>}
        <label className="label-el" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          className={`input-el ${res2}`}
          type="text"
          id="lastName"
          placeholder="Last name"
          onBlur={this.onBlurLastName}
        />
        {isLastGiven && <p className="err">*Required</p>}
        <button className="submit-btn" type="submit">
          Submit
        </button>
      </form>
    )

    const submittedSuccess = (
      <div className="form-con">
        <img
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
          className="success-img"
        />
        <p className="submitted-para">Submitted Successfully</p>
        <button
          className="submit-btn"
          onClick={this.onClickSubmitAgain}
          type="button"
        >
          Submit Another Response
        </button>
      </div>
    )
    const res = isLoggedIn ? submittedSuccess : formEl
    return (
      <div className="reg-con">
        <h1 className="reg-heading">Registration</h1>
        {res}
      </div>
    )
  }
}

export default RegistrationForm
