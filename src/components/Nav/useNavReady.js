import React from 'react'

function useNavReady(firstChildId, lastChildId) {
  const [isReady, setIsReady] = React.useState(false)

  function checkScroll() {
    const firstChild = document.getElementById(firstChildId)
    const lastChild = document.getElementById(lastChildId)
    const firstTop = firstChild.offsetTop
    const topReady = firstTop + window.innerHeight
    const scrolledBottom = lastChild.offsetHeight + lastChild.offsetTop
    setIsReady(window.scrollY >= topReady && window.scrollY <= scrolledBottom)
  }

  React.useEffect(() => {
    window.addEventListener('scroll', checkScroll, { passive: true })
    window.addEventListener('resize', checkScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', checkScroll)
      window.removeEventListener('resize', checkScroll)
    }
    // eslint-disable-next-line
  }, [])

  return isReady
}

export default useNavReady
