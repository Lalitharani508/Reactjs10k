import React from 'react'

const Nameimput = ({n,setn}) => {
    function handleip(e){
        setn(e.target.value)

    }
  return (
    <div>
      <input type="text" placeholder='type here' value={n} onChange={handleip}></input>
    </div>
  )
}

export default Nameimput;
