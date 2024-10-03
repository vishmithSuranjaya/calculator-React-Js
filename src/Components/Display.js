import React from 'react'

const Display = (props) => {

  const number = props.input;
  return (
    <div>
      <p style={{"backgroundColor":"gray","padding":"5px","margin":"5px","minHeight":"50px","color":"orange"}}>
        {number}
        <br />
       <span style={{"fontSize":"23px","fontWeight":"700","backgroundColor":"gray","color":"#fff"}}>{props.result} </span>
      </p>
    </div>
  )
}

export default Display
