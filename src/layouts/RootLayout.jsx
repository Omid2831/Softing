import Header from "../components/ui/Header"
import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="flex flex-col">
            {/** Header Section */}
            <Header />

            <main className="flex-1">
                <Outlet />
            </main>
        </div>
    )
}

export default RootLayout;