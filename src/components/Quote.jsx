import React, {useEffect, useState } from 'react'
import dice from '../assets/images/icon-dice.svg'
import pattern_sep from '../assets/images/pattern-divider-desktop.svg'
import pattern_sep_mobile from '../assets/images/pattern-divider-mobile.svg'
import './Quotes.css'

const Quote = () => {
    const [advice, setAdvice] = useState(false)
    const [userstate, setUserState] = useState('')
    
        useEffect(()=>{
            fetch('https://api.adviceslip.com/advice')
                .then(response => response.json())
                .then(data => setUserState(data))
            
    
        },[])

    const handleAdvice = ()=>{
       try {
        fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data =>  setAdvice(data))
        .catch(err => console.log(err.message))
       } catch (error) {
        console.log('Something went wrong')
       }
    }


  return (
   <>
    <div className="quote-container">
        <div className="quote-body">
            <div className="advice-id">
                {
                    advice === false ? userstate && (
                        <div>
                            <h2>ADVICE #{userstate.slip.id}</h2>
                            <p className='init-quote'>{userstate.slip.advice}</p>
                        </div>
                    ) : 
                    advice && (
                        <div>

                            <h2> ADVICE #{advice.slip.id}</h2>
                        </div>
                    )
                }
            </div>
            <div className="quotes">
                {
                    advice && (
                        <div>
                            <p>"{advice.slip.advice}"</p>
                        </div>
                    )
                }
            </div>
            <div className="pattern-sep">
                <img className='desktop-sep' src={pattern_sep} alt="" />
                <img className='mobile-sep' src={pattern_sep_mobile} alt="" />

            </div>

            <div className="circle-button">
            <button onClick={handleAdvice} aria-label='dice to generate a random advice'><img src={dice} alt="dice" /></button>
           
        </div>
        </div>
       
    </div>
   </>
  )
}

export default Quote