import React from 'react'

const Loading = () => {
  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-300/20'>
<p className='min-h-screen flex items-center justify-center absolute'>
Loading
</p>
      <div className='w-25 sm:w-30 aspect-square border-4 border-t-15 border-b-15 border-x-0  border-orange-400 rounded-full animate-spin '>
      </div>
    </div>

  )
}

export default Loading
