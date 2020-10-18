import { Anchor } from './types'

export function oppose(anchor: Anchor) {
  return anchor === 'right' ? 'left' : 'right'
}
