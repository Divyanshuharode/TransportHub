import React from 'react'
import TransporterLayout from '../layouts/TransporterLayout';

import Login from "../pages/login/Login";
import Dashboard from "../pages/dashboard/Dashboard";
import Transport_Requests from "../pages/transport_Requests/Transport_Requests";
import Bookings from "../pages/bookings/Bookings";
import Booking_Tracking from "../pages/booking_Tracking/Booking_Tracking";
import Drivers from "../pages/drivers/Drivers";
import Earnings_Payments from "../pages/Earnings_Payments/Earnings_Payments";
import Reports from "../pages/reports/Reports";
import Profile from '../pages/profile/Profile';
import Document_verification from "../pages/document_verification/Document_verification";
import Settings from "../pages/settings/Settings"

import { BrowserRouter, Routes, Route } from "react-router-dom";


function TransporterRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
                <Route path="/transporter" element={<TransporterLayout />}>
                    <Route index element={<Dashboard />}></Route>
                    <Route path='' element={<Transport_Requests />}></Route>
                    <Route path='' element={<Bookings />}></Route>
                    <Route path='' element={<Booking_Tracking />}></Route>
                    <Route path='' element={<Drivers />}></Route>
                    <Route path='' element={<Earnings_Payments />}></Route>
                    <Route path='' element={<Reports />}></Route>
                    <Route path='' element={<Profile />}></Route>
                    <Route path='' element={<Document_verification />}></Route>
                    <Route path='' element={<Settings />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default TransporterRoutes