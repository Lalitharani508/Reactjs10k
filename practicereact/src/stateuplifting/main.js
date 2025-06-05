import React, { useState } from 'react'
import Naamedisplay from './namedisplay'
import Nameimput from './nameimput'

const Main = () => {
    const [name,setname]=useState("")
  return (
    <div>
      <h1>
        stateuplifting
        <Nameimput n={name} setn={setname}/>
        <Naamedisplay n1={name}/>

      </h1>
    </div>
  )
}

export default Main
