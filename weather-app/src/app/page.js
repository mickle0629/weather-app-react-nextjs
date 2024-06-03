import Card from "@/lib/components/card";
import { fetchCurrentData } from "@/lib/data";
import { getRainDescription, getUVWarnings } from "@/lib/utility";


export default async function Page() {
  //fetching data...
  const currentWeather = await fetchCurrentData();
  console.log(currentWeather.forecast.forecastday);

  const currWeatherCardData = {
    top: currentWeather.location.localtime,
    main: `${currentWeather.current.temp_c}\u00b0C`,
    bottom: currentWeather.current.condition.text,
  };

  const highLowsCardData = {
    top: 'Lows - Highs',
    main: `${Math.trunc(currentWeather.forecast.forecastday[0].day.mintemp_c)} - ${Math.trunc(currentWeather.forecast.forecastday[0].day.maxtemp_c)}\u00b0C`,
    bottom: ''
  }
  
  const precipCardData = {
    top: 'Precipitation',
    main: `${currentWeather.forecast.forecastday[0].day.totalprecip_mm}mm`,
    //TODO: Dynamic rain descriptors
    bottom: `${getRainDescription(currentWeather.forecast.forecastday[0].day.totalprecip_mm)}`
  }

  const uviCardData = {
    top: 'UV Index',
    main: `${currentWeather.forecast.forecastday[0].day.uv}`,
    //TODO: Display different UV warnings based on UVI
    bottom: `${getUVWarnings(currentWeather.forecast.forecastday[0].day.uv)}`
  }

  return (
    <main className="flex flex-col m-24 gap-8">
      <Card data={currWeatherCardData}/>
      <Card data={highLowsCardData}/>
      <Card data={precipCardData}/>
      <Card data={uviCardData}/>
    </main>
  );
}
