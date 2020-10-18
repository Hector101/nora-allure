import { useEffect } from 'react'

/**
 * Prevent the body from scrolling.
 */
const useBlockScroll = (block: boolean) => {
  useEffect(() => {
    if (block) {
      document.body.style.overflow = 'hidden'
    } else {
      ;((document.body.style.overflow as unknown) as any) = null
    }

    // Whenever this is unmounted, make sure to reset the body's overflow.
    return () => {
      ;((document.body.style.overflow as unknown) as any) = null
    }
  }, [block])
}

export default useBlockScroll
