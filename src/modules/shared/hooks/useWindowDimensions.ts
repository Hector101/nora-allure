import { useState, useEffect } from 'react'

export interface WindowDimensions {
  innerHeight: number
  innerWidth: number
}

const getDimensions = () => {
  const { innerWidth, innerHeight } = window

  return { innerWidth, innerHeight }
}

/**
 * Returns a WindowDimensions object that updates every time the window is
 * resized.
 */
const useWindowDimensions = () => {
  // First render happens server side where there's no window.
  const [dimensions, setDimensions] = useState<WindowDimensions>({
    innerHeight: 0,
    innerWidth: 0,
  })

  useEffect(() => {
    setDimensions(getDimensions())
    const listener = () => {
      setDimensions(getDimensions())
    }

    window.addEventListener('resize', listener)

    return () => window.removeEventListener('resize', listener)
  }, [])

  return dimensions
}

export default useWindowDimensions
