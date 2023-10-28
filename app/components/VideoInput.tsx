import React from 'react'
import Image from 'next/image'
import GetVideo from './GetVideo'

const VideoInput = () => {
  return (
    <section className="flex justify-center items-center columns-2 gap-x-48">

        <div className="w-1/3 aspect-square rounded-lg shadow-md ring-1 ring-black ring-opacity-5 grid place-content-center">
                <GetVideo />
        </div>

        <div className="w-1/3">    
            <div className="aspect-square rounded-lg shadow-md ring-1 ring-black ring-opacity-5 grid place-content-center">
                <div className="grid place-content-center p-4">
                    Let&apos;s see that A sign!
                </div>
                    <Image
                        src="/Images/signA.png"
                        alt="Image"
                        width="0"
                        height="0"
                        sizes="fit"
                        className="w-fit h-auto"
                    />
            </div>
        </div>

    </section>
  )
}

export default VideoInput