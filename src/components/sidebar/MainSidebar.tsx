import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

const MainSidebar = () => {
  return (
    <Sidebar>
        <SidebarHeader>
            <Link to='/' className="flex items-end gap-1">
                <div className="uppercase text-2xl font-black tracking-tight text-primary">
                    pc shop
                </div>
                <div className="text-xs font-bold py-1">Admin</div>
            </Link>

        </SidebarHeader>
        <SidebarContent>
            <SidebarGroup>

            </SidebarGroup>
            <SidebarGroup>

            </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
        </SidebarFooter>
    </Sidebar>
  )
}

export default MainSidebar