import { supabase } from "../../../services/supabase";
import type { NextApiRequest, NextApiResponse } from 'next'
export default function handler(req: NextApiRequest, res:NextApiResponse) {
  supabase.auth.api.setAuthCookie(req, res);
}
