import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Plus } from "lucide-react"
import { Link } from "react-router-dom"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { PAGES_SIDEBAR } from "@/scripts/data/pages"

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
                <SidebarMenu>
                    <Collapsible>
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton className="cursor-pointer">
                                    <span>{PAGES_SIDEBAR.people.title}</span>
                                </SidebarMenuButton>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    <SidebarMenuButton asChild>
                                        <Link className="text-sm" to={PAGES_SIDEBAR.people.children.users.href}>
                                            {PAGES_SIDEBAR.people.children.users.title}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem>
                                    <SidebarMenuButton asChild>
                                        <Link className="text-sm" to={PAGES_SIDEBAR.people.children.employees.href}>
                                            {PAGES_SIDEBAR.people.children.employees.title}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                    <Collapsible>
                        <SidebarMenuItem>
                            <CollapsibleTrigger asChild>
                                <SidebarMenuButton className="cursor-pointer">
                                    <span>{PAGES_SIDEBAR.catalog.title}</span>
                                </SidebarMenuButton>
                            </CollapsibleTrigger>

                            <CollapsibleContent>
                                <SidebarMenuSub>
                                <SidebarMenuSubItem>
                                    <SidebarMenuButton asChild>
                                        <Link className="text-sm" to={PAGES_SIDEBAR.catalog.children.products.href}>
                                            {PAGES_SIDEBAR.catalog.children.products.title}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuSubItem>

                                <SidebarMenuSubItem>
                                    <SidebarMenuButton asChild>
                                        <Link className="text-sm" to={PAGES_SIDEBAR.catalog.children.categories.href}>
                                            {PAGES_SIDEBAR.catalog.children.categories.title}
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuSubItem>
                                </SidebarMenuSub>
                            </CollapsibleContent>
                        </SidebarMenuItem>
                    </Collapsible>
                </SidebarMenu>
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