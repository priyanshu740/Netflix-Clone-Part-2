import React, { useRef, useState } from 'react'
import '../Styles/register.css'

function Register() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const emailRef = useRef()
    const passRef = useRef()

    const handleEmail = () => {
        setEmail(emailRef.current.value)
    }

    const handlePass = () => {
        setPassword(emailRef.current.value)
    }


    return (
        <div className='register'>
            <div className='top'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png" alt='' />
                <button className='sign-in'>sign in</button>
            </div>
            <div className='info-register'>
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                    Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email ? (
                    <div className='input' >
                        <input placeholder='enter your email' type='text'
                            ref={emailRef}
                        />
                        <button className="sign-in-btn" onClick={handleEmail}>Sign in</button>
                    </div>) :
                     (
                    <form className='input'  >
                        <input placeholder='enter password' type='text'
                            ref={passRef}
                        />
                        <button className="start-btn" onClick={handlePass}>Start</button>
                    </form>
                    )
                }
            </div>

        </div>
    )
}

export default Register
