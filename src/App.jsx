
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "./auth/Auth";
// import Dashboard from "./components/dashboard/Dashboard";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Auth />} />
                {/* <Route path="/dashboard" element={<Dashboard />} /> */}
            </Routes>
        </BrowserRouter>
    );

}


export default App;
