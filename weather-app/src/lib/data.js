import secrets from '../../secrets.json'

export async function fetchCurrentData() {
  try {
    const currentData = await fetch(`${secrets.API_TOP}forecast.json?q=95138&dt=3&key=${secrets.API_KEY}`, {
      headers: {
        "Content-Type": "application/json"
      },
      next: { revalidate: 0 }
    });
    //console.log(currentData.json)
    return currentData.json();
  } catch (error) {
    console.error('API Error: ', error);
    throw new Error('Failed to fetch current weather data.');
  }
}