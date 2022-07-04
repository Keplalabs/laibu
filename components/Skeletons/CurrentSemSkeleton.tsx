import React from 'react'

type Props = {}

function CurrentSemSkeleton({}: Props) {
  return (
  <div className='h-96  w-full'>
    {/* header */}
      {/*  content */}
      <div className="flex flex-col gap-2 ">
        <div className="h-16 rounded-sm bg-gray-200 animate-pulse"></div>
        <div className="h-16 rounded-sm bg-gray-200 animate-pulse"></div>
        <div className="h-16 rounded-sm bg-gray-200 animate-pulse"></div>
      </div>

    </div>
  )
}

export default CurrentSemSkeleton