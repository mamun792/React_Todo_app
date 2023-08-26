import React from 'react'

export default function Footer() {
  return (
    <footer className='footer bg-gray-900 mx-auto container p-10 text-sm text-center text-teal-600 border-t border-dashed border-teal-900'>
        <p >
        &copy;  {new Date().getFullYear()} Alright Reserved
        </p>
    </footer>
  )
}
