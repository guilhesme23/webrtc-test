import React, { useState, useEffect, useRef } from 'react'

function VideoScreen() {
  const [stream, setStream] = useState()
  const [displayStream, setDisplayStream] = useState()

  const videoElm = useRef()
  const displayElm = useRef()

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({
      audio: true,
      video: {
        width: 1080,
        height: 720
      }
    }).then(stream => setStream(stream))

    navigator.mediaDevices.getDisplayMedia({
      video: {
        cursor: 'always' | 'motion' | 'never',
        displaySurface: 'application' | 'browser' | 'monitor' | 'window'
      }
    }).then(stream => setDisplayStream(stream))
  }, [])

  useEffect(() => {
    if (videoElm.current) {
      videoElm.current.srcObject = stream
    }
  }, [stream])

  useEffect(() => {
    if (displayElm.current) {
      displayElm.current.srcObject = displayStream
    }
  }, [displayStream])

  return (
    <>
      <video
        autoPlay
        muted
        ref={videoElm}
      ></video>
      <video
        autoPlay
        muted
        ref={displayElm}
      ></video>
    </>
  )
}

export default VideoScreen