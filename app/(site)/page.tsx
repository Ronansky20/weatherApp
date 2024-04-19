'use client';

import { useWeather } from '@/providers/WeatherContext';
import { useRouter } from 'next/navigation';
import WeatherAPI from "@/components/weatherAPI";

export default function Home() {
  const { weather, handleCityChange, handleSubmit } = WeatherAPI();
  const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Place location here</p>
      <h1>Fetch API data and place the temperature here</h1>
      <p>Fetch the API data and place the kind of weather here (kind as in mostly sunny etc.)</p>
      <div>
            <form onSubmit={handleSubmit}>
                <input type="text" onChange={handleCityChange} placeholder='Enter city name'/>
            </form>
            {weather && <div>{JSON.stringify(weather)}</div>}
        </div>
      <button type="button" onClick={() => router.push('/start')} >Test</button>
    </main>
  );
}
