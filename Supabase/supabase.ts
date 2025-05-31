// Supabase/supabase.ts
import { createClient } from '@supabase/supabase-js';
import { EXPO_PUBLIC_SUPABASE_URL, EXPO_PUBLIC_SUPABASE_ANON_KEY } from '@env'; // <-- UNCOMMENTED

// const EXPO_PUBLIC_SUPABASE_URL="https://szwwpidatlzuqhtsxvmd.supabase.co" // <-- COMMENTED OUT or REMOVE
// const EXPO_PUBLIC_SUPABASE_ANON_KEY="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN6d3dwaWRhdGx6dXFodHN4dm1kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1OTE1NDksImV4cCI6MjA2NDE2NzU0OX0.nKN2CDLYFRv3BXmmDAMv003KPU0WDiXzXDJyDW8zL5U" // <-- COMMENTED OUT or REMOVE

if (!EXPO_PUBLIC_SUPABASE_URL) {
  throw new Error("Supabase URL not found. Have you created a .env file?");
}
if (!EXPO_PUBLIC_SUPABASE_ANON_KEY) {
  throw new Error("Supabase Anon Key not found. Have you created a .env file?");
}

export const supabase = createClient(
  EXPO_PUBLIC_SUPABASE_URL,
  EXPO_PUBLIC_SUPABASE_ANON_KEY
);