'use client';

import Image from 'next/image';
import { IoIosSunny } from "react-icons/io";
import { useRouter } from 'next/navigation';
import WeatherAPI from "@/components/weatherAPI";
import React, { useState } from 'react'

function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
}

const weatherImages: { [key: string]: string } = {
  'Sunny': '/weatherIcons/sunny.png',
  'Cloudy': '/weatherIcons/cloudy.png',
  'Rain': '/weatherIcons/rain.png',
  'Snow': '/weatherIcons/snow.png',
  'Fog': '/weatherIcons/fog.png',
  'Mist': '/weatherIcons/mist.png',
  'Haze': '/weatherIcons/hazy.png',
  'Thunderstorm': '/weatherIcons/tstorms.png',
  'Clear': '/weatherIcons/clear.png',
  'Partly cloudy': '/weatherIcons/partlycloudy.png',
  'Patchy rain possible': '/weatherIcons/rain.png',
  'Patchy snow possible': '/weatherIcons/snow.png',
  'Patchy sleet possible': '/weatherIcons/sleet.png',
}

export default function Home() {
  const { weather, handleCityChange, handleSubmit } = WeatherAPI();
  const router = useRouter();
  const [currentDate] = useState(getDate());

  const backgroundImage = weather?.current?.condition?.text
    ? weatherImages[weather.current.condition.text]
    : undefined;

  return (
    <div className='grid grid-cols-1 gap-4 mt-5'>
      {backgroundImage && (
        <div className='absolute inset-0 z-[-1] flex justify-end bg-slate-100'>
          <Image
            alt='Background'
            src={backgroundImage}
            layout='fill'
            objectFit='cover'
            className='filter blur-lg'
          />
        </div>
      )}
      <div className='px-4 py-4'>
        <p className='font-semibold text-sm'>
          Good day
        </p>
        <p className='font-light text-xs'>
          {currentDate}
        </p>
      </div>

      <div className='font-semibold justify flex justify-center focus:border-none'>
          <form className='focus:border-none' onSubmit={handleSubmit}>
              <input type="text" onChange={handleCityChange} placeholder='Enter city name' className='font-semibold justify flex justify-center text-center focus:outline-none bg-transparent'/>
          </form>
      </div>
      <h1 className='font-bold text-center text-8xl text-slate-800'>
      {weather && weather.current && weather.current.temp_c}°C
      </h1>

      <p className='text-slate-800 font-light text-center text-sm'>
        {weather && weather.current && weather.current.condition.text}
      </p>
      <button type="button" onClick={() => router.push('/start')} ></button>

      <div className='justify-center flex bg-neutral-100 rounded-3xl w-11/12 h-full mx-4 my-3'>
        <div className='grid-cols-3 grid gap-x-10'>
          <div className="flex flex-col items-left justify-center w-full">
            <IoIosSunny className="text-neutral-400" size={20}/>
            <p className='font-light text-sm'>UV Index</p>
            <p className='font-bold'>{weather && weather.current && weather.current.uv}</p>
          </div>
          <div className="flex flex-col items-left justify-center w-full">
            <IoIosSunny className="text-neutral-400" size={20}/>
            <p className='font-light text-sm'>Humidity</p>
            <p className='font-bold'>{weather && weather.current && weather.current.humidity}%</p>
          </div>
          <div className="flex flex-col items-left justify-center w-full">
            <IoIosSunny className="text-neutral-400" size={20}/>
            <p className='font-light text-sm'>Precipation</p>
            <p className='font-bold'>{weather && weather.current && weather.current.precip_mm}mm</p>
          </div>
        </div>
      </div>

      <div className="justify-center flex flex-col bg-neutral-300 rounded-3xl w-11/12 h-full mt-4 mx-auto backdrop-filter backdrop-blur-lg bg-opacity-40 border border-white border-opacity-20">
        <p className='font-light text-sm m-2 text-neutral-800'>Next hours</p>
        <div className='grid-cols-1 grid'>
          {weather && weather.forecast && weather.forecast.forecastday[0].hour.slice(0, 4).map((hour, index) => (
            <div key={index} className='flex items-center '>
              <Image 
                className='rounded-full border-transparent m-2 bg-slate-800 drop-shadow-sm backdrop-filter backdrop-blur-lg bg-opacity-10 border border-white border-opacity-20'
                alt="" 
                src={hour.condition.icon ? `https:${hour.condition.icon}` : ''}
                width={64}
                height={64} 
              />
              <div className='w-full border-white border-x rounded-full p-2 mb-4 mr-4 flex items-center pl-6'>
                <p className="font-semibold text-slate-800 pr-4">{hour.temp_c}°</p>
                <p className="font-light">at {String(new Date(hour.time).getHours()).padStart(2, '0')}:{String(new Date(hour.time).getMinutes()).padStart(2, '0')}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
