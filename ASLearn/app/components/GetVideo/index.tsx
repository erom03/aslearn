'use client'

import { useEffect, useRef, useState } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:5000/video'); // Replace with your Flask server URL

export default function GetVideo() {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    socket.on('connect', () => {
      console.log('Connected to WebSocket');
    });

    socket.on('video_frame', (frameData: Blob) => {
      // Log the received frame data
      console.log('Received frame data:', frameData);

      // Create a URL for the Blob object
      const blobUrl = URL.createObjectURL(frameData);

      // Update the video element with the URL of the Blob
      videoRef.current!.src = blobUrl;
    });

    return () => {
      // Clean up WebSocket connection when component unmounts
      socket.disconnect();
    };
  }, []);

  return (
    <div>
      <h1>Video Stream</h1>
      <video
        ref={videoRef}
        autoPlay
        controls
      ></video>
    </div>
  );
}
