import React from 'react';
import { useState, useRef, useContext } from 'react';
import AuthContext from '../../store/auth-context';
import Loader from '../UI/Loader/Loader';
import img from '../../Assets/10.jpg'
import classes from './Login.module.css';

const Login = () => {
    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    const authCtx = useContext(AuthContext)

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);


    const switchHandler = () => {
        setIsLogin((prevState) => !prevState);
    }
    function submitHandler(event) {
        event.preventDefault();
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
        setIsLoading(true);

        //signin
        let url;
        if (isLogin) {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=AIzaSyDiflAVlxPjfCh7NUieH-09cCcAVEwBJ88';
        }
        else {
            url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDiflAVlxPjfCh7NUieH-09cCcAVEwBJ88';
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        }
        ).then(response => {
            setIsLoading(false)
            if (response.ok) {
                return response.json();
            }
            else {
                return response.json().then((data) => {
                    let errorMessage = 'Authentication failed';
                    if (data && data.error && data.errorMessage) {
                        errorMessage = data.error.message;
                    }
                    throw new Error(errorMessage);
                });
            }
        }).then((data) => {
            const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
            authCtx.login(data.idToken, expirationTime.toISOString());
        }).catch(error => {
            alert(error.message);
        });
    }
    return (
        <div className={classes.main}>
            <div className={classes.img}>
                <img src={img} alt='img' />
            </div>
            <form onSubmit={submitHandler}>
                <div className={classes.login}>
                    <div className={classes.h1}>
                        <h1>{isLogin ? 'Welcome Back!' : 'Sign Up'}</h1>
                        <p>To stay connected, please kindly
                            login with your personal info, else sign up.</p>
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='email'>Email</label>
                        <input type='email'
                            id='email'
                            placeholder='Enter-email' ref={emailInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Password</label>
                        <input type='password'
                            id='password'
                            placeholder='Enter-password' ref={passwordInputRef} />
                    </div>
                    <div className={classes.button}>
                        {!isLoading && <button onClick={switchHandler}
                            className={classes.btn}>
                            {isLogin ? 'Login' : 'Create Account'}
                        </button>}
                        {isLoading && <Loader />}
                        <button type='button' onClick={switchHandler}
                            className={classes.toggle}>
                            {isLogin ? 'Sign Up' : 'Login with existing account'}
                        </button>
                    </div>
                    <a href='#1'>Forgot password?</a>
                </div>
            </form>
        </div>
    )
}

export default Login;