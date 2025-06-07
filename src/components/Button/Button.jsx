import React from 'react'

const Button = ({buttonContent}) => {
  return (
      <button className='bg-primary text-white text-base font-bold uppercase px-16 py-5 rounded-[50px] max-md:text-sm text-nowrap'>
          {buttonContent}
    </button>
  )
}

export default Button