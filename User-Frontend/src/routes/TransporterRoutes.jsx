import React from 'react'
import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import TransporterLayout from '../layouts/TransporterLayout'
import { BrowserRouter, Routes, Route, href } from "react-router-dom";


function TransporterRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/transporter" element={<TransporterLayout />}>
                    {/* <Route path='/gaddar' index element={href}></Route> */}
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default TransporterRoutes