import Card from "@/lib/components/card";

export default function Page({ currentData }) {
  //fetching data...
  const currWeatherCardData = {
    top: 'Saturday, June 1st, 2024',
    main: '31\u00b0C',
    bottom: 'Sunny'
  };

  const highLowsCardData = {
    top: 'Lows - Highs',
    main: '14 - 27\u00b0C',
    bottom: ''
  }

  const precipCardData = {
    top: 'Precipitation',
    main: '4mm',
    bottom: 'Maybe a slight drizzle'
  }

  const uviCardData = {
    top: 'UV Index',
    main: '6',
    bottom: 'High - avoid outside, use sunscreen, or cover self'
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
