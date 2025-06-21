/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_SUPABASE_URL: string;
  readonly VITE_SUPABASE_ANON_KEY: string;
  // add more as you go…
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
