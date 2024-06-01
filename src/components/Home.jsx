import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import Place from './Place'
import { useNavigate } from 'react-router-dom'

function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className='h-screen bg-cover bg-center bg-opacity-70 ' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
        <div className='flex flex-col gap-10 p-5 lg:px-36 lg:pt-[18%] pt-[45%] text-white bg-gradient-to-b from-transparent via-black to-transparent'>
          <div className='gap-5'>
            <h1 className='lg:text-7xl text-5xl font-black'>Book an exclusive</h1>
            <p className='lg:text-4xl text-2xl font-semibold'>home for your personal travel</p>
          </div>
          <div>
            <p className='lg:text-2xl text-xl'>Each property is <span className='font-bold'>hand picked</span>,</p>
            <p className='lg:text-2xl text-xl'>Personaly visited and cannot be found elsewhere</p>
          </div>
          <div>
            <Button onClick={() => navigate('/packages')} variant='contained' color='success' size='large'>Explore packages...</Button>
          </div>
        </div>
      </div>
      <Place />
    </div>
  )
}

export default Home
