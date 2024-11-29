import React from "react";
import "./login.css";

const Login = () => {
    return (
        <div className="signup-container">
            <div className="signup-box">
                <h2>Log in</h2>
                <h3 className="sub-signup">log in with:</h3>
                <form>
                    <button className="signup-button"><i class="fa-brands fa-apple"></i> Log in with Apple</button>
                    <button className="signup-button"><i class="fa-brands fa-google"></i> Log in with Google</button>
                    <div className="divider">
                        <hr className="line" />
                        <h4 className="divider-text">or</h4>
                        <hr className="line" />
                    </div>
                    <h3 className="sub-signup">Log in by using email:</h3>
                    <div className="form-element">
                        <label htmlFor="email" className="label-text">Your Email</label>
                        <input type="email" className="input-signup" placeholder="abc@gmail.com" />
                        <label htmlFor="password" className="label-text">Your Password</label>
                        <input type="password" className="input-signup" placeholder="password" />
                        <button className="submit">Log in</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
