import React from 'react'

const Login = (props) => {
    const { email,setEmail,password,setPassword,handleLogin,handleSignUp,hasAccount,setHasAccount,emailError,passwordError} = props;
    return (
        <div>
        <section className="login">
        <div className="loginContainer">
            <label>Username</label>
            <input type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)}/>
            <p className="errorMessage">{emailError}</p>
            <label>Password</label>
            <input type="password" autoFocus required value={password} onChange={(e) => setPassword(e.target.value)}/>
            <p className="errorMessage">{passwordError}</p>
            <div className="btnContainer">
                {hasAccount ? (
                    <>
                    <button onClick={handleLogin}>Sign in</button>
                    <p>Don't have an account?<span onClick={() => setHasAccount(!hasAccount)}>Sign up here!</span></p>
                    </>
                ) :( 
                <><button onClick={handleSignUp}>Sign up</button>
                <p>Already have an account?<span  onClick={() => setHasAccount(!hasAccount)}>Sign in here!</span></p>
                    </>
                    )
                }
            </div>
        </div>
        </section>
        </div>
    )
}

export default Login;
