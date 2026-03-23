import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/app-sidebar";
import { AppHeader } from "@/components/dashboard/app-header";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="light bg-white text-zinc-950 min-h-screen">
      <TooltipProvider>
        <SidebarProvider>
          <AppSidebar />
          <div className="flex w-full flex-col overflow-hidden min-h-screen">
            <AppHeader />
            <main className="flex-1 overflow-y-auto p-4 md:p-6 bg-slate-50">
              {children}
            </main>
          </div>
        </SidebarProvider>
      </TooltipProvider>
    </div>
  );
}
