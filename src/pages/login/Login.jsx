import React from 'react'
import "./login.scss"
import {AiOutlineMail,AiFillLock} from "react-icons/ai"
const Login = () => {
  return (
    <>
    <div className="login">
    <div className="log-wappers">
            <h2>Login</h2>
            <form action="#">
                <div className="input-box">
                    <span className='icon'><AiOutlineMail/></span>
                    <input type="email" required />
                    <label>E-mail</label>
                </div>
                <div className="input-box">
                    <span className='icon'><AiFillLock/></span>
                    <input type="password" required />
                    <label>Password</label>
                </div>
                <div className="remember">
                    
                    <label><input type="checkbox" />Remember Me</label>
                    <div className="para">forget-Password</div>
                </div>
                <button className='btn' type='submit'>LogIn</button>
                <div className="submit">
                <p>Don't have an account?</p>
                <p className="register" >Register</p>
                </div>
            </form>
        </div>
    </div>
     </>
  )
}

export default Login