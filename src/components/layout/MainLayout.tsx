import { Outlet } from "react-router-dom";
import MainSidebar from "../sidebar/MainSidebar";

export function MainLayout() {
    return (
        <div className="flex h-screen w-screen">
            <MainSidebar />
            <Outlet />
        </div>
    )
}