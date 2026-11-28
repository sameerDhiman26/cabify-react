
import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Login({ showSignup }) {

    const navigate = useNavigate();

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

                navigate("/dashboard");

            } else {
                alert("Invalid email or password");
            }

        } catch (error) {
            console.log(error);
            alert("Server error");
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
