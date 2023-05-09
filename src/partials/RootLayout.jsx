import { Outlet } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs";
import Navbar from "./Navbar";
const RootLayout = () => {
    return (
        <>
            <Navbar />
            <Breadcrumbs/>
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;
