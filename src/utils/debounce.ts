export default  function debounce<K extends any[]>(
  func: (...args: K) => void,
  wait: number,
  immediate: boolean = false
) {
  let timeout: any
  return function (...args: K): void {
    const context = this
    const later = function () {
      timeout = null
      if (!immediate) func.apply(context, args)
    }
    const callNow = immediate && !timeout
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
    if (callNow) func.apply(context, args)
  }
}
