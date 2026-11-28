import { useState } from "react";
import Home from "../home/Home";
import SideBar from "../sidebar/SideBar";
import { Outlet } from "react-router";

function Dashboard() {



    return (
        <>
                    
            <div className="dashboard">
                <SideBar />
                <main className="main-content">
                    <Outlet/>
                </main>
            </div>
            

        </>
    )
}
export default Dashboard;