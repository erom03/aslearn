"use client"

import Webcam from 'react-webcam';
import React from 'react'

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: "user"
};

const page = () => {
  return(
  <Webcam
    audio={false}
    height={720}
    screenshotFormat="image/jpeg"
    width={1280}
    videoConstraints={videoConstraints}
  >
    {({ getScreenshot }) => (
      <button
        onClick={() => {
          const imageSrc = getScreenshot();
        }}
      >
        Capture photo
      </button>
    )}
  </Webcam>);
}

export default page
