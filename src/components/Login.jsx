import React from 'react'
import {Link} from 'react-router-dom'

function Login() {
    return (
        <>
            <div className="login-container">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="login-section">
                                <h1 className='login-heading'>Login</h1>
                                <form className='login-form'>
                                    <label htmlFor="email" className='form-label'>Email</label>
                                    <input type="email" id='email' placeholder='Email' className='form-input' />
                                    <label htmlFor="password" className='form-label'>Password</label>
                                    <input type="password" id='password' placeholder='Password' className='form-input' />
                                    <button className='login-btn'>Login</button>
                                    <p class="text-center text-muted mt-5 mb-0">Not a Member? <Link href="#"
                                        class="signup-now-text">SignUp Now</Link></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login