import { Outlet } from "react-router-dom";
import MainSidebar from "../sidebar/MainSidebar";

export function MainLayout() {
    return (
        <div>
            <MainSidebar />
            <Outlet />
        </div>
    )
}