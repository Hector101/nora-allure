import { RefObject } from 'react'

export const scrollTo = (ref: RefObject<HTMLElement>) => {
  if (ref.current) {
    window.scrollTo({
      behavior: "smooth",
      top: ref.current.offsetTop
    })
  }
}
