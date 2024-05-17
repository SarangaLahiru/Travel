import { createBrowserRouter, Navigate } from "react-router-dom";
import Default from "./layout/Default";
import Guest from "./layout/Guest";
import Home from "./pages/home";
import ImageUpload from "./pages/ImageUpload";
import Login from "./pages/login";
import ParkOPT from "./pages/parkOPT";
import QRImageUpload from "./pages/QRImageUpload";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Default />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/dashboard',
                element: <Navigate to="/user" />
            },
            {
                path: '/user',
                element: <Navigate to="/" />
            },
            {
                path: '/detection',
                element: <QRImageUpload />
            },
            {
                path: '/parkOPT',
                element: <ParkOPT />
            },

        ]
    },
    {
        path: '/',
        element: <Guest />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/image',
                element: < ImageUpload />
            },

        ]
    }
])
export default router;