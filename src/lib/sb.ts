import { createClient } from "@supabase/supabase-js";
import { z } from "zod";

export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
export const SUPABASE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(SUPABASE_URL || "", SUPABASE_KEY || "");

export const newsletterSchema = z.object({
    email: z
        .string()
        .email("Please provide a valid email address")
        .min(1, "Email is required"),
});
