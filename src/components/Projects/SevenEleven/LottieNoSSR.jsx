// src/components/LottieNoSSR.jsx
import React, { useEffect, useState } from 'react'

export default function LottieNoSSR(props) {
  const [Lottie, setLottie] = useState(null)

  useEffect(() => {
    let mounted = true
    ;(async () => {
      // dynamic import only runs in the browser
      const mod = await import('react-lottie')
      // handle both default and named export shapes
      const LottieComp = mod.default || mod
      if (mounted) setLottie(() => LottieComp)
    })()
    return () => {
      mounted = false
    }
  }, [])

  // render nothing during SSR / until client module loads
  if (!Lottie) return null

  return <Lottie {...props} />
}
