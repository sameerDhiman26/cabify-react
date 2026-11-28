import "./Home.css"


function Home(){
    return(
        <>
            <div className="homepage">

                <div className="topbar">

                    <div className="search">

                        <i className="fa-solid fa-magnifying-glass"></i>

                        <input type="text" placeholder="Search destination"></input>

                    </div>

                    <div className="profile">

                        <i className="fa-regular fa-bell"></i>

                        <div className="userIcon"></div>

                    </div>

                </div>


                <section className="hero">

                    <div>

                        <h1 id="welcomeLine">Welcome Back, User 👋</h1>

                        <p>
                            Ready for your next ride? Find affordable rides or
                            offer your own in seconds.
                        </p>

                        <button className="find-btn">Find Ride</button>

                    </div>

                </section>


                <section className="stats">

                    <div className="card">

                        <i className="fa-solid fa-route"></i>

                        <h2>12</h2>

                        <p>Trips Completed</p>

                    </div>

                    <div className="card">

                        <i className="fa-solid fa-wallet"></i>

                        <h2>₹4,580</h2>

                        <p>Total Savings</p>

                    </div>

                    <div className="card">

                        <i className="fa-solid fa-star"></i>

                        <h2>4.9</h2>

                        <p>Your Rating</p>

                    </div>

                </section>


                <section className="actions">

                    <div className="action">

                        <i className="fa-solid fa-car"></i>

                        <h3 className="offer-btn">Offer Ride</h3>

                    </div>

                    <div className="action">

                        <i className="fa-solid fa-location-arrow"></i>

                        <h3 className="find-btn">Book Ride</h3>

                    </div>

                    <div className="action">

                        <i className="fa-solid fa-users"></i>

                        <h3>My Carpools</h3>

                    </div>

                </section>


                <section className="rides">

                    <h2>Recent Rides</h2>

                    <table>

                        <tr>

                            <th>From</th>

                            <th>To</th>

                            <th>Date</th>

                            <th>Status</th>

                        </tr>

                        <tr>

                            <td>Delhi</td>

                            <td>Chandigarh</td>

                            <td>22 Aug</td>

                            <td><span className="completed">Completed</span></td>

                        </tr>

                        <tr>

                            <td>Mohali</td>

                            <td>Patiala</td>

                            <td>25 Aug</td>

                            <td><span className="upcoming">Upcoming</span></td>

                        </tr>

                    </table>

                </section>
            </div>

            




    
        </>
    )
}

export default Home;