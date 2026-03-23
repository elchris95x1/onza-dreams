"use client";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import {
  Plus,
  ListVideo,
  PlaySquare,
  BookOpen,
  CreditCard,
  Settings,
  ArrowUpCircle,
  UserCircle,
  Target
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const items = [
  {
    title: "Series",
    url: "/dashboard/series",
    icon: ListVideo,
  },
  {
    title: "Videos",
    url: "/dashboard/videos",
    icon: PlaySquare,
  },
  {
    title: "Guides",
    url: "/dashboard/guides",
    icon: BookOpen,
  },
  {
    title: "Billing",
    url: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: Settings,
  },
];

export function AppSidebar() {
  const pathname = usePathname();

  return (
    <Sidebar>
      <SidebarHeader className="px-4 py-4 border-b">
        <div className="flex items-center gap-2 mb-4">
          <div className="flex bg-gradient-to-br from-purple-500 to-pink-500 p-1.5 rounded-lg">
            <Target className="h-5 w-5 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight">Onza Dreams</span>
        </div>
        <Button className="w-full justify-start text-base font-semibold" size="lg">
          <Plus className="mr-2 h-5 w-5" />
          Create new series
        </Button>
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="gap-2 mt-2">
              {items.map((item) => {
                const isActive = pathname.startsWith(item.url);
                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={isActive} tooltip={item.title}>
                      <Link href={item.url} className="text-base py-6">
                        <item.icon className="h-5 w-5" />
                        <span className="text-base font-medium">{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="border-t p-4">
        <SidebarMenu className="gap-2">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/billing/upgrade" className="text-base py-5 text-amber-600 dark:text-amber-400 font-medium hover:text-amber-700 dark:hover:text-amber-300">
                <ArrowUpCircle className="h-5 w-5" />
                <span>Upgrade to paid plan</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Link href="/dashboard/settings/profile" className="text-base py-5 font-medium">
                <UserCircle className="h-5 w-5" />
                <span>Profile settings</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
