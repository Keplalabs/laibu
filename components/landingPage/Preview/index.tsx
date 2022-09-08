import React from 'react'
// import dashboard from '/public/images/'
import Image from 'next/image'
type Props = {}

function index({}: Props) {
  return (
    <div>
      <p>Access notes,lecture videos,assignments,previous exams from your personal dashboard</p>
      {/* <Image src={dashboard.src} width={700} height={600} alt="preview of dashboard"/> */}
    </div>
  )
}

export default index