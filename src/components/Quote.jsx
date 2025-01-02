import React, { useState } from 'react'
import dice from '../assets/images/icon-dice.svg'
import pattern_sep from '../assets/images/pattern-divider-desktop.svg'
import './Quotes.css'

const Quote = () => {
    const [advice, setAdvice] = useState(false)

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
                    advice === false ? <p>Press the dice to generate advice</p> : 
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
                <img src={pattern_sep} alt="" />
            </div>
        </div>
        <div className="circle-button">
            <button onClick={handleAdvice} aria-label='dice to generate a random advice'><img src={dice} alt="dice" /></button>
           
        </div>
    </div>
   </>
  )
}

export default Quote