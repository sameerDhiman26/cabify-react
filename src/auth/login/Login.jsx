
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
                <i className="fa-brands fa-google"></i>
                Continue with Google
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
