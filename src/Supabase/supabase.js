import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://anmgeodpxvrfszcufzij.supabase.co';  /// /rest/v1
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTYyODUwNzUzNCwiZXhwIjoxOTQ0MDgzNTM0fQ.g47vU8N9LWJQOoV5mao0cUGeTvG5gAk515YLa51mmtI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey)