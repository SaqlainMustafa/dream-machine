import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Layout from './Layout'


function Profile() {
  const [signUp, setSignUp] = useState(true)
  const [login, setLogin] = useState(false)
  const hanldeSignUpScreen = () => {
    setSignUp(true)
    setLogin(false)
  }

  const hanldeLoginScreen = () => {
    setSignUp(false)
    setLogin(true)
  }
  return (
    <Layout>
      {signUp &&
        <SignUp hanldeLoginScreen={hanldeLoginScreen} />}
      {login &&
        <Login hanldeSignUpScreen={hanldeSignUpScreen} />}

    </Layout>
  )
}

export default Profile


function SignUp({ hanldeLoginScreen }) {
  return (
    <>
      <div className="signup-form-container">
        <div className="container">
          <div className="form-section animate__animated animate__fadeInDown">
            <h1 className='signup-heading'>SignUp</h1>
            <form className='signup-form'>
              <label htmlFor="firstname" className='form-label'>First Name</label>
              <input type="name" id='firstname' placeholder='First Name' className='form-input' />
              <label htmlFor="lastname" className='form-label'>Last Name</label>
              <input type="text" id='lastname' placeholder='Last Name' className='form-input' />
              <label htmlFor="email" className='form-label'>Email</label>
              <input type="email" id='email' placeholder='Email' className='form-input' />
              <label htmlFor="password" className='form-label'>Password</label>
              <input type="password" id='password' placeholder='Password' className='form-input' />
              <div className="form-chk-content d-flex mt-2">
                <input class="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" />
                <label class="form-check-label" for="formcheck">
                  I agree all statements in <Link href="#!" className=''><span>Terms of service</span></Link>
                </label>
              </div>
              <button className='mt-4 register-btn'>Register</button>
            </form>
            <p class="text-center text-muted mt-5 mb-0">Have already an account?
              <span class="login-here-text "
                onClick={hanldeLoginScreen}>Login here</span>
            </p>
          </div>
        </div>
      </div>
    </>

  )
}

function Login({ hanldeSignUpScreen }) {
  return (
    <>
      <div className="login-container">
        <div className="container">
          <div className="login-section animate__animated animate__fadeInDown">
            <h1 className='login-heading'>Login</h1>
            <form className='login-form'>
              <label htmlFor="email" className='form-label'>Email</label>
              <input type="email" id='email' placeholder='Email' className='form-input' />
              <label htmlFor="password" className='form-label'>Password</label>
              <input type="password" id='password' placeholder='Password' className='form-input' />
              <button className='login-btn'>Login</button>

            </form>
            <p class="text-center text-muted mt-5 mb-0">Not a Member?
              <span class="signup-now-text"
                onClick={hanldeSignUpScreen}>SignUp Now
              </span>
            </p>
          </div>
        </div>
      </div>
    </>

  )
}