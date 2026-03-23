import { currentUser } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import { createAdminClient } from '@/lib/supabase/admin';
import Link from 'next/link';

export default async function DashboardPage() {
  const user = await currentUser();
  
  if (!user) {
    redirect('/');
  }

  // Use the admin client to bypass Row Level Security rules
  // so we can seamlessly UPSERT user records.
  const supabase = createAdminClient();
  const primaryEmail = user.emailAddresses[0]?.emailAddress ?? '';
  const fullName = `${user.firstName || ''} ${user.lastName || ''}`.trim() || 'User';

  // Sync to 'users' table in Supabase
  const { error } = await supabase
    .from('users')
    .upsert(
      { 
        id: user.id, 
        email: primaryEmail, 
        name: fullName 
      },
      { onConflict: 'id' }
    );

  if (error) {
    console.error('Error syncing user to Supabase:', JSON.stringify(error, null, 2));
  }

  return (
    <div className="container mx-auto px-4 py-8 border-none md:p-6 lg:p-8">
      <div>
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">
          Welcome to the Dashboard, {user.firstName || primaryEmail}!
        </h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl">
          Your account is successfully synced with Supabase. You are ready to start creating AI videos and scheduling them across platforms.
        </p>
        
        <div className="mt-8 border rounded-xl overflow-hidden bg-card text-card-foreground shadow-sm max-w-md p-6">
           <h2 className="text-xl font-bold mb-2">Account Status</h2>
           <ul className="space-y-2 text-sm">
            <li><span className="font-semibold">Clerk User ID:</span> {user.id}</li>
            <li><span className="font-semibold">Email:</span> {primaryEmail}</li>
            <li><span className="font-semibold">Sync:</span> {error ? 'Sync Failed' : 'Synced to Supabase ✨'}</li>
           </ul>
        </div>
        
        <div className="mt-8">
           <Link href="/" className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
             Back to Home Flow
           </Link>
        </div>
      </div>
    </div>
  );
}
