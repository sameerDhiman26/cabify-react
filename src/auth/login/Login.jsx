
import { useState } from "react";
import { auth, googleProvider } from "../../firebase";
import { signInWithPopup } from "firebase/auth";

function Login({ showSignup }) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function loginauth(e) {
        e.preventDefault();

        try {
            let response = await fetch("http://localhost:3000/users");
            let users = await response.json();

            let user = users.find(
                user => user.email === email && user.password === password
            );

            if (user) {
                localStorage.setItem(
                    "currentUser",
                    JSON.stringify(user)
                );

                alert("Login successful");

            } else {
                alert("Invalid email or password");
            }

        } catch (error) {
            console.log(error);
            alert("Server error");
        }
    }

    async function googleLogin() {

        try {
            let result = await signInWithPopup(auth, googleProvider);

            let googleUser = result.user;

            let response = await fetch("http://localhost:3000/users");
            let users = await response.json();

            let existingUser = users.find(
                user => user.email === googleUser.email
            );

            let user;

            if (existingUser) {
                user = existingUser;
            } else {

                let newUser = {
                    name: googleUser.displayName,
                    email: googleUser.email,
                    photoURL: googleUser.photoURL,
                    authProvider: "google"
                };

                let postResponse = await fetch("http://localhost:3000/users", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(newUser)
                });

                user = await postResponse.json();
            }

            localStorage.setItem(
                "currentUser",
                JSON.stringify(user)
            );

            alert("Google login successful");

        } catch (error) {
            console.log(error);
            alert("Google login failed");
        }
    }

    return (
        <section>
            <header>
                <h2>Welcome Back</h2>
                <p className="small">Login to continue</p>
            </header>

            <form onSubmit={loginauth}>
                <div className="input-box">
                    <i className="fa-regular fa-envelope"></i>

                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>

                <div className="input-box">
                    <i className="fa-solid fa-lock"></i>

                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="login-btn">
                    Login
                </button>
            </form>

            <div className="divider">
                <span>OR</span>
            </div>

            <button
                type="button"
                className="google-btn"
                onClick={googleLogin}
            >
                <svg viewBox="0 0 48 48" width="20" height="20">
                    <path fill="#4285F4" d="M43.6 24.5c0-1.4-.1-2.8-.4-4.1H24v7.8h11c-.5 2.5-1.9 4.6-4.1 6v5h6.6c3.9-3.6 6.1-8.8 6.1-14.7z" />
                    <path fill="#34A853" d="M24 44c5.5 0 10.1-1.8 13.5-4.8l-6.6-5c-1.8 1.2-4.1 2-6.9 2-5.3 0-9.8-3.6-11.4-8.4H5.8v5.2C9.2 39.6 16.1 44 24 44z" />
                    <path fill="#FBBC05" d="M12.6 27.8a12 12 0 0 1 0-7.6V15H5.8a20 20 0 0 0 0 18z" />
                    <path fill="#EA4335" d="M24 11.8c3 0 5.7 1 7.8 3.1l5.8-5.8C34.1 5.9 29.5 4 24 4 16.1 4 9.2 8.4 5.8 15l6.8 5.2c1.6-4.8 6.1-8.4 11.4-8.4z" />
                </svg>                Continue with Google
            </button>

            <p className="signup-text">
                Don't have an account?

                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    showSignup();
                }}>
                    Sign Up
                </a>
            </p>
        </section>
    );
}

export default Login;
