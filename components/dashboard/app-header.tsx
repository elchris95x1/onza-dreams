"use client";

import { UserButton } from "@clerk/nextjs";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 w-full items-center justify-between border-b bg-background px-4 shadow-sm">
      <div className="flex items-center gap-4">
        <SidebarTrigger className="md:hidden" />
        {/* We can add breadcrumbs or page title here later if needed */}
        <h1 className="text-lg font-semibold md:hidden">Onza Dreams</h1>
      </div>
      <div className="flex items-center gap-4">
        <UserButton 

          appearance={{
            elements: {
              avatarBox: "h-9 w-9",
            }
          }}
        />
      </div>
    </header>
  );
}
