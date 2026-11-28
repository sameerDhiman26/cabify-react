import { NavLink } from "react-router"
import "./SideBar.css"

function SideBar(){



    return(
        <div className="sidebar">

            <div className="logo">
                <i className="fa-solid fa-car"></i>
                <h2>Cabify</h2>
            </div>

            <ul>

                <li className="active menu-item home-btn">
                    <NavLink to={"/dashboard/home"}><i className="fa-solid fa-house "></i> Home</NavLink></li>

                <li className="find-btn menu-item"><i className="fa-solid fa-location-dot "></i> Find Ride</li>

                <li className="menu-item offer-btn"><i className="fa-solid fa-car-side "></i> Offer Ride</li>

                <li className="menu-item trip-btn"><i className="fa-solid fa-road"></i> My Trips</li>

                <li className="message-btn menu-item"><i className="fa-solid fa-message"></i> Messages</li>

               <li className="wallet-btn menu-item"><i className="fa-solid fa-wallet"></i>Wallet</li>

                <li className="settings-btn menu-item"><i className="fa-solid fa-gear"></i> Settings</li>

                <li id="logoutBtn"><i className="fa-solid fa-right-from-bracket"></i> Logout</li>

            </ul>

        </div>
    )
}

export default SideBar