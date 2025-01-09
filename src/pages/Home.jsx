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
    </>
  )
}

export default Home