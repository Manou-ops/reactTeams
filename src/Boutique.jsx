import React from 'react'
import { useState } from 'react'

function boutique() {

    const [count, setCount] = useState(0)

  return (
    <> 


         <div>VOTRE PANIER</div>
         <div> <button onClick={() => setCount((count) => count + 1)} >ACHETER</button> </div>
         <div> NOMBRE D'ELEMENTS </div>
    
    </>
  )
}

export default boutique