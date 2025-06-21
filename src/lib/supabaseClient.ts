import { createClient } from '@supabase/supabase-js';

// These will now be typed and non-undefined
const supabaseUrl    = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Sanity check at runtime
if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY in .env');
}

console.log('Supabase URL is:', supabaseUrl);

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
