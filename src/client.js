import { createClient } from "@supabase/supabase-js"

const URL = "https://gopbkzlxvluhkhdlhsjc.supabase.co"
const KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdvcGJremx4dmx1aGtoZGxoc2pjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTA1ODExNDksImV4cCI6MjAwNjE1NzE0OX0.mQGlnylGDNwPbQl6YzW1wBt3rOMo12oejTC1QZyH1cI"

const supabase = createClient(URL,KEY)

export {supabase}