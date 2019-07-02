import { useRef, useState, useEffect } from 'react'

export default function useScrollPercentage() {
  const scrollRef = useRef(null)
  const [scrollPercentage, setScrollPercentage] = useState(NaN)

  const reportScroll = e => {
    setScrollPercentage(getScrollPercentage(scrollRef.current))
  }

  useEffect(() => {
    window.addEventListener('scroll', reportScroll, { passive: true })
    window.addEventListener('resize', reportScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', reportScroll)
      window.removeEventListener('resize', reportScroll)
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
    // This is probably unncecessary but I just want to make sure it never goes over 100
    return percent > 100 ? 100 : percent
  }
  return 0
}
