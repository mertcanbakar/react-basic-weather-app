import React from 'react'

const City = ({city}) => {
    console.log(city)
    const rounded = Math.round(city.main.temp);
  return (
    <div className='weather-info bg-gray-100'>
        <h1 className='text-center text-2xl'>{city.name}</h1>
        <h1 className='text-center text-5xl'>{rounded}°C</h1>
        <h1 className='text-center text-4xl'>{city.weather[0].main}</h1>
    </div>
  )
}

export default City
