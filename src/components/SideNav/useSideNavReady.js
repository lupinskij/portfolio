import React from 'react'

function useSideNavReady(id) {
  const [isReady, setIsReady] = React.useState(false)

  function checkScroll() {
    const el = document.getElementById(id)
    const { offsetTop } = el
    const readyPoint = offsetTop + window.innerHeight
    setIsReady(window.scrollY >= readyPoint)
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

export default useSideNavReady
