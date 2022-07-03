import React from 'react'

type Props = {}

function TabSkeleton({}: Props) {
  return (
  <div className='h-96  w-full'>
    {/* header */}
   <div className=" h-24 bg-gray-200 rounded-tr rounded-tl animate-pulse">
   </div>

    <div className="p-5 flex justify-evenly">
      {/*  tabHeader  */}
      <div className="h-8 w-16 rounded-sm bg-gray-200 animate-pulse mb-4"></div>
      <div className="h-8 w-16 rounded-sm bg-gray-200 animate-pulse mb-4"></div>
      <div className="h-8 w-16 rounded-sm bg-gray-200 animate-pulse mb-4"></div>
      </div>

      {/*  content */}
      <div className="flex flex-col gap-2 ">
        <div className="h-8 rounded-sm bg-gray-200 animate-pulse"></div>
        <div className="h-8 rounded-sm bg-gray-200 animate-pulse"></div>

        <div className="h-8 rounded-sm bg-gray-200 animate-pulse"></div>
        <div className="h-8 rounded-sm bg-gray-200 animate-pulse"></div>

        <div className="h-8 rounded-sm bg-gray-200 animate-pulse"></div>
        <div className="h-8 rounded-sm bg-gray-200 animate-pulse"></div>

      </div>

    </div>
  )
}

export default TabSkeleton