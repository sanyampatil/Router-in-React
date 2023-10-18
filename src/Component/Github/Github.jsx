import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
   
    
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-5xl'>{data.name}
    <div className='text-center m-4 bg-gray-600 text-gray-300 p-4 text-2xl'>{data.bio}
    <div className='text-center m-4 bg-gray-600 text-gray-300 p-4 text-2xl'>location: {data.location}
</div>
</div>

    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/sanyampatil')
    return response.json()
}