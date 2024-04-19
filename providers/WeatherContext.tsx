import { createContext, useContext } from 'react';

interface WeatherContextType {
  weather: any;
  setWeather: (weather: any) => void;
}

const WeatherContext = createContext<WeatherContextType | null>(null);

export function useWeather() {
  const context = useContext(WeatherContext);
  if (!context) {
    throw new Error('useWeather must be used within a WeatherProvider');
  }
  return context;
}

export default WeatherContext;