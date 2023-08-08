import React from 'react'

const Login = () => {
  return (
    <div className='login'>
        <h1>Login App</h1>
        <form>
            <input type="email"
            placeholder='enter your email' />
            <br />
            <input type="password"
            placeholder='enter your password' />

            <div className='inputSubmitlogin'>
                
            </div>
        </form>
    </div>
  )
}

export default Login