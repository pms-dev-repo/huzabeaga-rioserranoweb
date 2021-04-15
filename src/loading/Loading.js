import React, { useMemo } from 'react'
import Lottie from 'react-lottie';
import * as animationData from './animation.json'

export default function Loading() {
 

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
  };

  return useMemo(() => {
    return (
      <div style={{
        pointerEvents: 'none',
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        zIndex: 999999
      }}>
        <Lottie 
          options={defaultOptions}
          isStopped={false}
          isPaused={false}
          height={150}
          width={300}
        />
      </div>
    )
  }, [])
}