import React from 'react'

const Display = (props) => {

  const number = props.value;
  return (
    <div>
      <p style={{"backgroundColor":"gray","padding":"5px","margin":"5px","minHeight":"50px","color":"orange"}}>
        {number}
        <br />
       <span style={{"fontSize":"23px","fontWeight":"700","backgroundColor":"gray","color":"#fff"}}>{number[number.length-1]} </span>
      </p>
    </div>
  )
}

export default Display
