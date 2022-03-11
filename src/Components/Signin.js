import React, { createContext } from 'react';
import { Link } from 'react-router-dom';

export let signContext = createContext();
 let val = document.getElementById("numder")

export default function Signin() {



    return (
        <div className='login-content'>
            <div className='maindiv'>
                <div className='logo'>
                    <img src='/images/login.webp' alt='loading....' style={{ width: "100%" }} />
                </div>
                <div className='main-part'>
                    <div className='head'>Login <c>or</c> Signup</div>
                    <div className='textbox'>
                        <input type="text" id='number' placeholder='  Mobile number' />
                    </div>
                    <signContext.Provider
                        value={{val}}>
                        {/* <ContextCart /> */}
                    </signContext.Provider>

                    <div className='policy'>
                        <p>By continuing, I agree to the terms of use & Privacy Policy</p>
                    </div>
                    <div className='btn'>
                        <button  > CONTINUE </button>
                    </div>
                    <div className='lasttext'>Have trouble logging in? Get help
                        <br />
                        <br />
                        Don't have an acount &nbsp;&nbsp;
                        <Link to={'/Signup'}> create an account</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}


