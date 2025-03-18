import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import InputField from "../Components/input-field";
import Button from "../Components/button/Button";
import "./LoginPage.css";
import logo from "../Assets/loginpage/logo 1 .png";
import image from "../Assets/loginpage/Frame 2.png";
import InputField from "../Components/input-field/Inputfield";

const LoginPage = () => {
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState(""); 
    const navigate = useNavigate(); 

    const handleRegister = async (e) => {
        e.preventDefault(); 

        console.log("Inside register function");

        try {
            const response = await fetch("https://reqres.in/api/register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                localStorage.setItem("user", JSON.stringify({ email, password }));

                toast.success("Registration Successful! Redirecting...", {
                    position: "top-right",
                    autoClose: 1000,
                });

                setTimeout(() => navigate("/Dashboard", { state: data }), 1500);
            } else {
                toast.error(`Error: ${data.error || "Something went wrong"}`, {
                    position: "top-right",
                    autoClose: 3000,
                });
            }
        } catch (error) {
            toast.error("Network error. Please try again later.", {
                position: "top-right",
                autoClose: 3000,
            });
        }
    };

    return (
        <div className="login-page">
            <div className="container-login">
                {/* Left Section */}
                <div className="login-left">
                    <div className="logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="welcome-text">
                        <h1>Welcome to Onsyte</h1>
                        <p>Advanced wastewater treatment made simple. Log in to manage sustainable water solutions.</p>
                    </div>
                    
                    {/* Form Section */}
                    <form onSubmit={handleRegister}>
                        <div>
                            <label>Email</label>
                            <InputField 
                                type="email" 
                                placeholder="Enter your email" 
                                size="extra-large" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                            />
                        </div>
                        <div>
                            <label>Password</label>
                            <InputField 
                                type="password" 
                                placeholder="Enter your password" 
                                size="extra-large" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                            />
                        </div>
                        <div className="forgot-password">
                            <a href="/forgot-password">Forgot Password?</a>
                        </div>
                        <div className="button-container">
                            <Button color="blue" size="extra-large" label="Login" type="submit" />
                        </div>
                    </form>
                </div>

                {/* Right Section */}
                <div className="login">
                    <div className="login-right">
                        <img src={image} alt="Illustration" />
                        <div className="overlay-text"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

      

