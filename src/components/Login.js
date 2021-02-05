import React from 'react';

const Login = (props) => {
    const {
        email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignUp,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError, 
    } = props;


    return (
        <section>
            <div>
                <label>Username</label>
                <input type="text" autofocus required value={email} onChange={(e) => setEmail(e.target.value)}></input>
            <p>{emailError}</p>
            <label>Password</label>
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <p>{passwordError}</p>
            <div>
                {hasAccount ?  (
                    <>
                        <button onClick={handleLogin}></button>
                        <p>Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                    </>
                ) : (
                    <>
                    <button onClick={handleSignUp}>Sign up</button>
                    <p>Have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                    </>   
                )}
                </div>
            </div>
        </section>
    );
};
export default Login;