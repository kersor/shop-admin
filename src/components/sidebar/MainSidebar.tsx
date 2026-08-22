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
import { Link, useLocation } from "react-router-dom"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"
import { PAGES_SIDEBAR } from "@/scripts/data/pages"
import { useState } from "react"
import clsx from "clsx"
import { queryObjInLink } from "@/lib/queryObjInLink"

const MainSidebar = () => {
    const [openMenu, setOpenMenu] = useState<Record<string, boolean>>({})
    const location = useLocation()

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
                        {PAGES_SIDEBAR.map(p => {
                            const active = location.pathname.startsWith(p.href)
                            const isOpen = openMenu[p.href] ?? active

                            return (
                                <Collapsible
                                    key={p.href}
                                    open={isOpen}
                                    onOpenChange={(open) => {
                                        setOpenMenu(prev => ({...prev, [p.href]: open}))
                                    }}
                                >
                                    <SidebarMenuItem>
                                        <CollapsibleTrigger asChild>
                                            <SidebarMenuButton className="cursor-pointer">
                                                <span>{p.title}</span>
                                            </SidebarMenuButton>
                                        </CollapsibleTrigger>

                                        <CollapsibleContent>
                                            <SidebarMenuSub>
                                                {p.children?.map(pc => {
                                                    const query = queryObjInLink(pc.params ?? '')
                                                    const childrenLink = p.href + pc.href + `?${query}`

                                                    const childrenActive = location.pathname.endsWith(pc.href)
                                                    return(
                                                        <SidebarMenuSubItem key={pc.href}>
                                                            <SidebarMenuButton
                                                                asChild
                                                                className={clsx(
                                                                    "text-sm",
                                                                    childrenActive && [
                                                                        "bg-sidebar-primary",
                                                                        "text-sidebar-primary-foreground",

                                                                        "hover:bg-sidebar-primary",
                                                                        "hover:text-sidebar-primary-foreground",

                                                                        "active:bg-sidebar-primary",
                                                                        "active:text-sidebar-primary-foreground",
                                                                    ]
                                                                )}
                                                            >
                                                                <Link to={childrenLink}>
                                                                    {pc.title}
                                                                </Link>
                                                            </SidebarMenuButton>
                                                        </SidebarMenuSubItem>
                                                    )
                                                })}
                                            </SidebarMenuSub>
                                        </CollapsibleContent>
                                    </SidebarMenuItem>
                                </Collapsible>
                            )
                        })}
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