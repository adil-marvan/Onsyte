import React from 'react';
import InputField from '../Components/input-field/Inputfield';
import Button from '../Components/button/Button';
import './LoginPage.css';
import logo from '../Assets/loginpage/logo 1 .png';
import image from '../Assets/loginpage/Frame 2.png';

const LoginPage = () => {
    return (

        <div className="login-page">
            <div className="container">

                <div className="login-left">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="welcome-text">
                        <h1>Welcome to Onsyte</h1>
                        <p>Advanced wastewater treatment made simple.
                            Log in to manage sustainable water solutions.</p>
                    </div>
                    <div className="input-container">
                        <div className="">
                            <label>Email</label>
                            <InputField type="text" placeholder="Enter your email" size="extra-large" />
                        </div>
                        <div className="">
                            <label>Password</label>
                            <InputField type="password" placeholder="Enter your password" size="extra-large" />
                        </div>
                        <div className="forgot-password">
                            <a href="/forgot-password">Forgot Password?</a>
                        </div>
                        <div className="button-container">
                            <Button color="blue" size="extra-large" label="Login" />
                        </div>
                    </div>
                </div>

                <div className='login'>
                    <div className="login-right">
                        <img src={image} alt="Illustration" />
                        <div className="overlay-text">

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;


