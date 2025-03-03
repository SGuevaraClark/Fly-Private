import fs from 'fs';
import { parse } from 'csv-parse';

const airports = [];

// Read the CSV file
fs.createReadStream('./src/data/airports.csv')
  .pipe(parse({
    columns: true,
    skip_empty_lines: true
  }))
  .on('data', (row) => {
    // Only include actual airports suitable for private jets
    // Exclude heliports, seaplane bases, and other facilities
    if ((row.type === 'large_airport' || 
         row.type === 'medium_airport' || 
         row.type === 'small_airport') &&
        // Additional filters for small airports
        (row.type !== 'small_airport' || 
         (row.type === 'small_airport' && 
          row.iata_code && // Must have IATA code
          row.scheduled_service === 'yes'))) { // Must have scheduled service
      
      const airport = {
        id: row.id,
        name: row.name,
        city: row.municipality || row.name,
        country: row.country_name,
        iata: row.iata_code,
        icao: row.ident,
        latitude: parseFloat(row.latitude_deg),
        longitude: parseFloat(row.longitude_deg),
        type: row.type,
        isPrivate: row.type === 'small_airport',
        elevation: parseFloat(row.elevation_ft),
        continent: row.continent
      };

      airports.push(airport);
    }
  })
  .on('end', () => {
    // Sort airports to prioritize private airports
    airports.sort((a, b) => {
      // Private airports first
      if (a.isPrivate && !b.isPrivate) return -1;
      if (!a.isPrivate && b.isPrivate) return 1;
      
      // Then by type (large -> medium -> small)
      const typeOrder = {
        'large_airport': 1,
        'medium_airport': 2,
        'small_airport': 3
      };
      return typeOrder[a.type] - typeOrder[b.type];
    });

    // Write the entire array as a single JSON file
    fs.writeFileSync(
      './src/data/airports.json',
      JSON.stringify(airports, null, 2)
    );
    console.log('CSV file successfully processed');
    console.log(`Total airports included: ${airports.length}`);
  })
  .on('error', (error) => {
    console.error('Error processing CSV:', error);
  }); 