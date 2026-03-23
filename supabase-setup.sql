-- Run this in your Supabase SQL Editor to prepare the database for the user sync

create table if not exists public.users (
  id text primary key, -- The Clerk User ID
  email text,
  name text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Note: Because we are using Clerk instead of Supabase Auth,
-- native Supabase RLS policies using `auth.uid()` will NOT work.
-- Security is handled since we use the 'service_role' key on our secure backend routes!
