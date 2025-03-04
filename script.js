// Import the Supabase client library
import { createClient } from '@supabase/supabase-js';

// Replace these with your actual values from the Supabase dashboard
const supabaseUrl = 'https://ythklqwdlovpreqeybtx.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0aGtscXdkbG92cHJlcWV5YnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NzQzNzcsImV4cCI6MjA1NDQ1MDM3N30.Jt2RAFteiv245oQ45UW8kmcy1kLVN-kIkDBI-Av5ddQ';

// Initialize the Supabase client
const supabase = createClient(supabaseUrl, supabaseKey);

// Example: Fetch data from a table
async function fetchData() {
  const { data, error } = await supabase
    .from('resources')  // Replace with your table name
    .select('*'); // Adjust the query based on what you need

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data fetched:', data);
    // Display data in your webpage
    document.getElementById('data').textContent = JSON.stringify(data, null, 2);
  }
}

fetchData();
