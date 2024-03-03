import React from 'react'

function PhoneIcon(props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="icon icon-tabler icon-tabler-device-mobile custom-icon"
      width="28"
      height="28"
      viewBox="0 0 24 24"
      strokeWidth="1.3"
      stroke="#ffffff"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z" />
      <path d="M11 4h2" />
      <path d="M12 17v.01" />
    </svg>
  );
}

export default PhoneIcon