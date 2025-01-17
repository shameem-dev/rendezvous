import React from 'react'

const Logo = () => {
  return (
    <div className='bg-orange-50 '>
      <div className=" flex flex-col">
          <div className="h-10 w-screen bg-[url('/image/logo.png')] bg-repeat-x bg-contain animate-move"></div>
      </div>
    </div>
  )
}

export default Logo
