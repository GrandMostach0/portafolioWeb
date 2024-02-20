import React from 'react'

function TwitterIcon(props) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    class="icon icon-tabler icon-tabler-brand-x" 
    width="40" 
    height="40" 
    viewBox="0 0 24 24" 
    stroke-width="1.5" 
    stroke={props.color} 
    fill="none" s
    troke-linecap="round" 
    stroke-linejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
  )
}

export default TwitterIcon