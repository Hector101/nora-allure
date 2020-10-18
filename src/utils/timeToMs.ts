/**
 * Convert a string formatted as CSS time into number of miliseconds.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/CSS/time
 */
export default function timeToMs(duration: string): number {
  const parts = duration.match(/^([+-])?([\d.]+)(m?s)$/i)

  if (!parts) {
    throw new TypeError(`value ${duration} is not a valid css duration`)
  }
  const [, sign, num, unit] = parts
  const value = parseFloat(num)

  if (isNaN(value)) {
    throw new TypeError(`value ${duration} is not a valid css duration`)
  }

  let modifier = 1

  if (sign === '-') {
    modifier *= -1
  }

  if (unit === 's') {
    modifier *= 1000
  }

  return value * modifier
}
