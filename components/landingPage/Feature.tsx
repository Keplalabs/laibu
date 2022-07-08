import React from 'react'
import Image from 'next/image'
import { featureProps } from './propTypes'


const Feature = (props: featureProps) => {

  return (
    <div className='p-4 font-header xl:w-[400px] md:w-[300px]'>
        <div className='flex flex-col text-center text-primary gap-8 justify-center items-center'>
            <Image src={props.iconUrl} width={50} height={50} alt={props.description}/>
            <span className='text-2xl mb-4 font-bold'>{props.title}</span>
            <span className='font-mono' >{props.description}</span>
        </div>
    </div>
  )
}

export default Feature