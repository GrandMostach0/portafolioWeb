import React from 'react'

function Error(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    className={`icon icon-tabler icon-tabler-file-alert custom-icon ${props.classNameP}`}
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    stroke={props.color} 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M14 3v4a1 1 0 0 0 1 1h4" />
        <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z" />
        <path d="M12 17l.01 0" />
        <path d="M12 11l0 3" />
    </svg>
  )
}

export default Error