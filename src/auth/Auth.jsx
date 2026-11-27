
import { useState } from "react";
import Login from "./login/Login";
import Signup from "./signup/Signup";
import "./Auth.css";

function Auth() {

    const [isLogin, setIsLogin] = useState(true);

    function showLogin() {
        setIsLogin(true);
    }

    function showSignup() {
        setIsLogin(false);
    }

    return (

        <main className="container">

            <section className="left-content">

                <header className="logo">
                    <i className="fa-solid fa-car-side"></i>
                    <span>CabifyPool</span>
                </header>

                <section className="hero">

                    <h1>
                        Share Rides.<br />
                        <span>Save More.</span>
                    </h1>

                    <p className="subtitle">
                        Your ride, your way. Connect. Travel. Save together.
                    </p>

                </section>

                <section className="features">

                    <article className="feature-box">
                        <i className="fa-solid fa-users"></i>
                        <h3>Trusted</h3>
                        <p>Community</p>
                    </article>

                    <article className="feature-box">
                        <i className="fa-solid fa-shield-halved"></i>
                        <h3>Secure</h3>
                        <p>Rides</p>
                    </article>

                    <article className="feature-box">
                        <i className="fa-solid fa-wallet"></i>
                        <h3>Save</h3>
                        <p>More</p>
                    </article>

                </section>

            </section>

            <section className="login-card">

                <nav className="tabs">

                    <button
                        className={isLogin ? "active" : ""}
                        onClick={showLogin}
                    >
                        Login
                    </button>

                    <button
                        className={!isLogin ? "active" : ""}
                        onClick={showSignup}
                    >
                        Sign Up
                    </button>

                </nav>

                {isLogin ? (
                    <Login showSignup={showSignup} />
                ) : (
                    <Signup showLogin={showLogin} />
                )}

            </section>

        </main>

    );
}

export default Auth;
