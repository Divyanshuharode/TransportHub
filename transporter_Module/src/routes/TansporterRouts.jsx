import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from '../pages/Login'
import Transporter_Layout from '../layout/Transporter_Layout'
import Dashboard from '../pages/Dashboard'
import Booking from '../pages/Booking'
import Vhicals from '../pages/Vhicals'

function TansporterRouts() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/admin' element={<Transporter_Layout />}>
                        <Route index element={<Dashboard />}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default TansporterRouts