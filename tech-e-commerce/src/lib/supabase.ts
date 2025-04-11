import { createClient } from "@supabase/supabase-js";

const supabeseUrl = process.env.SUPABSE_URL;
const supabesekey = process.env.API_KEY;

export const supabase = createClient(supabeseUrl!, supabesekey!);
