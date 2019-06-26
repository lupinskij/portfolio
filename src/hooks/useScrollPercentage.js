import { useRef, useState, useEffect } from 'react'

export default function useScrollPercentage() {
  const scrollRef = useRef(null)
  const [scrollPercentage, setScrollPercentage] = useState(NaN)

  const reportScroll = e => {
    setScrollPercentage(getScrollPercentage(scrollRef.current))
  }

  useEffect(() => {
    window.addEventListener('scroll', reportScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', reportScroll)
    }
  }, [])

  return [scrollRef, Number.isNaN(scrollPercentage) ? 0 : scrollPercentage]
}

function getScrollPercentage(element) {
  const { bottom, height, top } = element.getBoundingClientRect()
  const actualTop = top - window.innerHeight
  // When actualTop is between 0 and height, the component is in view
  if (actualTop <= 0 && bottom > window.innerHeight) {
    const percent = Math.ceil((Math.abs(actualTop) / height) * 100)
    // There could be a bug here if you scroll really fast, this should prevent from
    // going over 100
    return percent > 100 ? 100 : percent
  }
  return 0
}
