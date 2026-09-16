// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://ulusiqeezvjhopgxsuvw.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_LOn48VrtE2AHdJxSv3J4kw_xqMFB3Rv';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
