import { LetterText, Plus } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { NavUser } from "./nav-user";
import { auth } from "@/auth";

// Menu items.
const items = [
  {
    title: "All Posts",
    url: "/admin",
    icon: LetterText,
  },
  {
    title: "Create Posts",
    url: "/admin/create",
    icon: Plus,
  },
];

export async function  AppSidebar() {
  const session = await auth();
  const data = {
    user: {
      name: session?.user?.name ?? "Anonymous",
      email: session?.user?.email ?? "Anonymous",
      avatar: session?.user?.image ?? "ADMIN",
    },
  };
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Admin Panel</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  );
}


