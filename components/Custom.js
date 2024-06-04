import React from 'react'
import Image from 'next/image'

const Custom = () => {
  return (
    <div className='bg-[#E8ECFD] w-[100vw] h-[40rem] flex justify-between items-center overflow-x-hidden'>
      {/* left */}
<div className='flex items-center'>
    <div>
        <p>WORK WITH</p>
    </div>
    <div>
        <h1>Customize Becca and turn your ideas into reality.</h1>
    </div>
</div>

      {/* right */}
      <div className='flex justify-between items-center'>
     
      <Image
            src={require("/public/R.png")}
            className="h-[15rem] w-[13rem] rounded-l-lg object-cover   ml-[5rem]"
          />
           <Image
            src={require("/public/customR.png")}
            className="h-[18rem] w-[13rem] rounded-l-lg object-cover   ml-[5rem]"
          />
      </div>

    </div>
  )
}

export default Custom
