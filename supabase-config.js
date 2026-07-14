// Supabase connection settings for Gistarena247
// The publishable key below is safe to expose in front-end code.
const SUPABASE_URL = "https://uxsoofqgfewgobjgaqab.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_kljyl8UArHtPA7yZwK-pFg_wl0LgIrP";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
