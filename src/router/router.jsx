import RootLayout from "@/layouts/RootLayout";
import HomePage from "@/pages/HomePage";
import { createBrowserRouter } from "react-router-dom";

{/** Initialize and configure the application's navigation router */ }


export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            { path: "home", element: <HomePage />, index: true }
        ]
    }
]);