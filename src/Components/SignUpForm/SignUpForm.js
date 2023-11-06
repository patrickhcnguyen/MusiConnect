import React, { useState } from "react";
import "./SignUpForm.css";

const SignUpForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const handleSubmit = (event) => {
        event.preventDefault();
        if (email === "" && password === "") {
            setError("Please fill out all fields.");
        } else if (email === "") {
            setError("Please enter an email.");
        } else if (password === "") {
            setError("Please enter a password.");
        } else {
            // Perform your action here
            alert(email + ' ' + password);
            setEmail("");
            setPassword("");
        }
    };

    return (
        <div className="signup-container">
            <form onSubmit={handleSubmit}>
                <label className="signup-label">Email</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={(event) => setEmail(event.target.value)}
                    className="signup-input"
                />
                <label className="signup-label">Password</label>
                <input 
                    type="password"
                    value={password} 
                    onChange={(event) => setPassword(event.target.value)} 
                    className="signup-input" 
                />
                <button type="submit" className="signup-button">Sign up</button>
            </form>
            {error && <p className="error-message">{error}</p>}
        </div>
    );
};

export default SignUpForm;
