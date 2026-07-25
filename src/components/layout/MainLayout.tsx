import { Outlet } from "react-router-dom";
import MainSidebar from "../sidebar/MainSidebar";

export function MainLayout() {
    return (
        <div className="flex h-screen w-screen">
            <MainSidebar />
            <div className="flex-1 overflow-auto bg-background p-4">
                <Outlet />
            </div>
        </div>
    )
}