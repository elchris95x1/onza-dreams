-- Run this in your Supabase SQL Editor to prepare the database for the user sync

create table if not exists public.users (
  id text primary key, -- The Clerk User ID
  email text,
  name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable RLS (Optional, but recommended for security)
alter table public.users enable row level security;

-- Optionally create a policy so users can read their own data via the client
create policy "Users can read their own info" on public.users
  for select using (auth.uid() = id);

-- Note: We are doing the upsert action from the Server securely using the service_role key, 
-- therefore we don't need to add insert/update policies for the client application.
