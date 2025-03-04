// Initialize the Supabase client
const supabaseUrl = 'https://ythklqwdlovpreqeybtx.supabase.co'; // Replace with your Supabase project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl0aGtscXdkbG92cHJlcWV5YnR4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg4NzQzNzcsImV4cCI6MjA1NDQ1MDM3N30.Jt2RAFteiv245oQ45UW8kmcy1kLVN-kIkDBI-Av5ddQ'; // Replace with your API key (safe to use in the browser)
const supabase = supabase.createClient(supabaseUrl, supabaseKey);

// Fetch data from a table
async function fetchData() {
  const { data, error } = await supabase
    .from('resources') // Replace 'your-table-name' with your actual table name
    .select('*');

  if (error) {
    console.error('Error fetching data:', error);
  } else {
    console.log('Data fetched:', data);
    // Display the data on the page
    const dataDiv = document.getElementById('data');
    dataDiv.textContent = JSON.stringify(data, null, 2);
  }
}

fetchData(); // Call the function

