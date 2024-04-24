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

export default function Home() {
  const { weather, handleCityChange, handleSubmit } = WeatherAPI();
  const router = useRouter();
  const [currentDate] = useState(getDate());

  return (
    <div className='grid grid-cols-1 gap-4 mt-5'>

      <div className='px-4 py-4'>
        <p className='font-semibold text-sm'>
          Good Morning
        </p>
        <p className='font-light text-xs'>
          {currentDate}
        </p>
      </div>

      <div className='font-semibold justify flex justify-center'>
          <form className='border-transparent border-2' onSubmit={handleSubmit}>
              <input type="text" onChange={handleCityChange} placeholder='Enter city name' className='font-semibold justify flex justify-center text-center'/>
          </form>
      </div>
      <h1 className='font-bold text-center text-8xl text-slate-800'>
      {weather && weather.current && weather.current.temp_c}°C
      </h1>

      <p className='text-slate-800 font-light text-center text-sm'>
        {weather && weather.current && weather.current.condition.text}
      </p>
      <button type="button" onClick={() => router.push('/start')} ></button>

      <div className='justify-center flex bg-neutral-300 rounded-3xl w-11/12 h-full mx-auto'>
        <div className='grid-cols-3 grid'>
          <div className="flex flex-col items-center justify-center w-full">
            <IoIosSunny className="text-neutral-400" size={20}/>
            <p>UV Index</p>
            <p>{weather && weather.current && weather.current.uv}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <IoIosSunny className="text-neutral-400" size={20}/>
            <p>Humidity</p>
            <p>{weather && weather.current && weather.current.humidity}</p>
          </div>
          <div className="flex flex-col items-center justify-center w-full">
            <IoIosSunny className="text-neutral-400" size={20}/>
            <p>Precipation</p>
            <p>{weather && weather.current && weather.current.precip_mm}mm</p>
          </div>
        </div>
      </div>

      <div className="justify-center flex flex-col bg-neutral-300 rounded-3xl w-11/12 h-100 mt-8 mx-auto">
        <p className='font-light text-sm m-2'>Next days</p>
        <div className='grid-cols-1 grid'>
          <Image 
            className='rounded-full border-transparent border-2 m-2 bg-neutral-400'
            alt="" 
            src={weather && weather.current.condition.icon ? `https:${weather.current.condition.icon}` : ''}
            width={64}
            height={64} 
          />
        </div>
        <div className=''>
          <Image 
            className='rounded-full border-transparent border-2 m-2 bg-neutral-400'
            alt="" 
            src={weather && weather.current.condition.icon ? `https:${weather.current.condition.icon}` : ''}
            width={64}
            height={64} 
          />
        </div>
        <div className=''>
          <Image 
            className='rounded-full border-transparent border-2 m-2 bg-neutral-400'
            alt="" 
            src={weather && weather.current.condition.icon ? `https:${weather.current.condition.icon}` : ''}
            width={64}
            height={64} 
          />
        </div>
        <div className=''>
          <Image 
            className='rounded-full border-transparent border-2 m-2 bg-neutral-400'
            alt="" 
            src={weather && weather.current.condition.icon ? `https:${weather.current.condition.icon}` : ''}
            width={64}
            height={64} 
          />
        </div>
      </div>
    </div>
  );
}
