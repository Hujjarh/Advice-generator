import React from 'react'
import './Home.css'
import Quote from '../components/Quote'

const Home = () => {
  return (
    <>
    <main className="home-container">
      <h1>Advice Generator App</h1>
      <Quote/>
    </main>
    <footer className='footer'>
      <div>&copy; 2025</div>
      <div>Devloped by <strong>Hujjarh</strong></div>
    </footer>
    </>
  )
}

export default Home