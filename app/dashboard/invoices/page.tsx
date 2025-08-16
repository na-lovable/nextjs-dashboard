export default async function Page() {
    // Artificially delay a response for demo purposes.
        // Don't do this in production :)
    
        console.log('Fetching invoices data...');
        await new Promise((resolve) => setTimeout(resolve, 5000));
    
        console.log('Page load completed after 5 seconds.');
    return <p>Invoices Page</p>
}