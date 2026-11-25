
import { useState } from "react";

function Signup({ showLogin }) {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    async function signupauth(e) {

        e.preventDefault();

        let nameRegex = /^[A-Za-z ]{2,30}$/;
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        let passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!*?&])[A-Za-z\d@$!*?&]{8,}$/;

        if (!nameRegex.test(name)) {
            alert("Invalid name");
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Invalid email");
            return;
        }

        if (!passwordRegex.test(password)) {
            alert("Password must contain uppercase, lowercase, number and special character.");
            return;
        }

        try {
            let response = await fetch("http://localhost:3000/users");
            let users = await response.json();

            let existingUser = users.find(
                user => user.email === email
            );

            if (existingUser) {
                alert("User already exists");
                return;
            }

            let user = {
                name: name,
                email: email,
                password: password
            };

            let postResponse = await fetch("http://localhost:3000/users", {

                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify(user)

            });

            let data = await postResponse.json();

            alert("Signup successful");

            setName("");
            setEmail("");
            setPassword("");
            showLogin();

        } catch (error) {

            console.log(error);
            alert("Server error");

        }
    }

    return (
        <section>
            <header>
                <h2>Create Account</h2>
                <p className="small">Sign up to continue</p>
            </header>

            <form onSubmit={signupauth}>
                <div className="input-box">
                    <i className="fa-regular fa-user"></i>

                    <input
                        type="text"
                        placeholder="Enter your name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>

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
                        placeholder="Create password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <button type="submit" className="login-btn">
                    Sign Up
                </button>
            </form>

            <p className="signup-text">
                Already have an account?

                <a href="#" onClick={(e) => {
                    e.preventDefault();
                    showLogin();
                }}>
                    Login
                </a>
            </p>
        </section>
    );
}

export default Signup;
