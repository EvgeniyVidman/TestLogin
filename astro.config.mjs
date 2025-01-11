import { defineConfig } from 'astro/config'
import { supabase } from './src/lib/supabase'

export default defineConfig({
  // your configuration options here...
  output: "server",
  adapter: supabase(),
})