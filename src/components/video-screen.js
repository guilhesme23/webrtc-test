import React, { useState, useEffect, useRef } from 'react'

function VideoScreen() {
  const [stream, setStream] = useState()

  const videoElm = useRef()

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: {
        width: 1080,
        height: 720
      }
    }).then(stream => setStream(stream))
  }, [])

  useEffect(() => {
    if (videoElm.current) {
      videoElm.current.srcObject = stream
    }
  }, [stream])

  return (
    <video
      autoPlay
      muted
      ref={videoElm}
    ></video>
  )
}

export default VideoScreen