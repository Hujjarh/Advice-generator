import React, { useEffect, useState } from 'react'

const Useeffect = () => {
    const [userstate, setUserState] = useState('')

    useEffect(()=>{
        fetch('https://api.adviceslip.com/advice')
            .then(response => response.json())
            .then(data => setUserState(data))
        

    },[])

  return (
   <>
   <div>
    {
        userstate && (
            <div>
                <h2>Random Advice</h2>
                <p>{userstate.slip.advice}</p>
            </div>

        )
    }
   </div>
   </>
  )
}

export default Useeffect