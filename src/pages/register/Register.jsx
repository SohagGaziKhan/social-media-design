import React from 'react'
import "./register.scss"
import {AiOutlineMail,AiFillLock,AiFillPhone} from "react-icons/ai"
import {ImLocation} from "react-icons/im"

const Register = () => {
  return (
    <>
    <div className="Register">
    <div className="log-wappers">
            <h2>Register</h2>
            <form action="#">
                <div className="input-box">
                    <input type="text" required />
                    <label>Name</label>
                </div>
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
                <div className="input-box">
                    <span className='icon'><AiFillLock/></span>
                    <input type="password" required />
                    <label>Compare Password</label>
                </div>
                <div className="input-box">
                    <span className='icon'><AiFillPhone/></span>
                    <input type="number" required />
                    <label>Phone</label>
                </div>
                <div className="input-box">
                    <span className='icon'><ImLocation/></span>
                    <input type="text" required />
                    <label>Address</label>
                </div>
                <div className="remember">
                    
                    <label><input type="checkbox" />Remember Me</label>
                </div>
                <button className='btn' type='submit'>Register</button>
                <div className="submit">
                <p>You have already an account?</p>
                <p className="register" >LogIn</p>
                </div>
            </form>
        </div>
    </div>
     </>
  )
}

export default Register