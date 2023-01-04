import React from 'react'

function RuleHR({color, width=240}) {
  return (
    <>
        <hr className='hr'
      style={{
        borderColor: color,
        width: width,
      }}
    />
    </>
  )
}

export default RuleHR