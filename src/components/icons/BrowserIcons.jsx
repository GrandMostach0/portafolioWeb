import React from 'react'

function BrowserIcons(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    className={`iconicon-tabler icon-tabler-brand-github custom-icon ${props.classNameP} `}
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    strokeWidth="1.5" 
    stroke={props.color} 
    fill="none" 
    strokeLinecap="round" 
    strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0" />
        <path d="M3.6 9h16.8" />
        <path d="M3.6 15h16.8" />
        <path d="M11.5 3a17 17 0 0 0 0 18" />
        <path d="M12.5 3a17 17 0 0 1 0 18" />
    </svg>
  )
}

export default BrowserIcons