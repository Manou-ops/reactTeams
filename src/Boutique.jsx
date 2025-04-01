import React from 'react'
import { useState } from 'react'
import './BoutiqueStyle.css'

function Boutique() {

    const [count, setCount] = useState(0)

  return (
    <> 


         <div className='basket'>VOTRE PANIER</div>
         <div className='buttonBox'>
         <div className='buyButton'> <button onClick={() => setCount((count) => count + 1)} >Ajouter</button> </div>
         <div className='buyButton'> <button onClick={() => setCount((count) => count - 1)} >Retirer</button> </div>
         </div>
         <div className='basketContent'> NOMBRE D'ELEMENTS { count } </div>
    
    </>
  )
}

export default Boutique