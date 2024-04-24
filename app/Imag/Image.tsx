import React from 'react'
import Image from 'next/image'

const Imagee = () => {
  return (
    <div>
        <Image alt="..." src="/img/mhsb-6.webp" width={500} height={500} className="w-full object-cover" style={{height: 450}}></Image>
    </div>
  )
}

export default Imagee