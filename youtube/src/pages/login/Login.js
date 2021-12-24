import React, {useState ,useContext } from 'react'
import { login } from '../../ContextAPI/AuthContext/ApiLoginCall'
import { AuthContext } from '../../ContextAPI/AuthContext/Auth'
import './login.css'
function Login() {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {isfetching,dispatch} = useContext(AuthContext)

    const handleClick = (e) => {
        e.preventDefault() 
        login({email,password},dispatch)
    }
    return (
        <div className='login'>
            <h1 className="loginTitle">Enter Below Details To Login To Your Account</h1>
            <form className="loginFrom">
                <input placeholder='enter your email'  type="text" className='loginInput' onChange={(e) => setEmail(e.target.value)}/>
                <input placeholder='enter your password'  type='password' className='loginInput'  onChange={(e) => setPassword(e.target.value)}/>
                <button className='loginBtn' disabled={isfetching} onClick={handleClick}>Login</button>
            </form>
        </div>
    )
}

export default Login

