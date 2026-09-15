// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://ardnucavibingeahychm.supabase.co';
const SUPABASE_ANON_KEY = 'sb_publishable_9Ca20DGAPM8bZHvGUxinaw_lUfEK4TX';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
