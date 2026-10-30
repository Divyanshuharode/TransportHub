import React from 'react'
import TransporterLayout from '../layouts/TransporterLayout';
import LandingPage from '../pages/LandingPage'

import Login from "../pages/login/Login";
import TransporterRegister from "../pages/login/SignUp"
import Dashboard from "../pages/dashboard/Dashboard";
import Vehicles from "../pages/vehicles/Vehicles";
import Transport_Requests from "../pages/transport_Requests/Transport_Requests";
import Bookings from "../pages/bookings/Bookings";
import Live_Tracking from "../pages/live_Tracking/Live_Tracking";
import Drivers from "../pages/drivers/Drivers";
import Earnings_Payments from "../pages/Earnings_Payments/Earnings_Payments";
import Reports from "../pages/reports/Reports";
import Profile from '../pages/profile/Profile';
import Document_verification from "../pages/document_verification/Document_verification";
import Settings from "../pages/settings/Settings"
import ProtectedRoute from "./ProtectedRoute"

import { BrowserRouter, Routes, Route } from "react-router-dom";


function TransporterRoutes() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LandingPage />}></Route>

                <Route path="/login" element={<Login />}></Route>

                <Route path="/register" element={<TransporterRegister />}></Route>

                <Route path="/transporter" element={<ProtectedRoute><TransporterLayout /></ProtectedRoute>}>

                    <Route index element={<Dashboard />}></Route>

                    <Route path='vehicles' element={<Vehicles />}></Route>

                    <Route path='transportRequests' element={<Transport_Requests />}></Route>

                    <Route path='bookings' element={<Bookings />}></Route>

                    <Route path='livetracking' element={<Live_Tracking />}></Route>

                    <Route path='drivers' element={<Drivers />}></Route>

                    <Route path='earnings_payments' element={<Earnings_Payments />}></Route>

                    <Route path='reports' element={<Reports />}></Route>

                    <Route path='profile' element={<Profile />}></Route>

                    <Route path='documentsVerify' element={<Document_verification />}></Route>

                    <Route path='settings' element={<Settings />}></Route>

                </Route>

            </Routes>
        </BrowserRouter>
    )
}

export default TransporterRoutes