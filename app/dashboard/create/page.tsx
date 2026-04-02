import { CreateSeriesWizard } from "@/components/dashboard/create/create-series-wizard";

export default function CreateSeriesPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-1">
        <h1 className="text-3xl font-bold tracking-tight">Create New Series</h1>
        <p className="text-muted-foreground">Setup your automated short-form video series in a few clicks.</p>
      </div>
      <CreateSeriesWizard />
    </div>
  );
}
