import React, { useState } from 'react'
import dice from '../assets/images/icon-dice.svg'
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
                    advice === false ? <h1>Press the dice to generate advice</h1> : 
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
                            <h2>"{advice.slip.advice}"</h2>
                        </div>
                    )
                }
            </div>
            {/* <div className="horizontal-sep">
                <hr />
                <div><h1>''</h1></div>
                <hr />
                
            </div> */}
        </div>
        <div className="circle-button">
            <img src={dice} alt="dice" onClick={handleAdvice}/>
           
        </div>
    </div>
   </>
  )
}

export default Quote