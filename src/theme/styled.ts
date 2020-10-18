import styled, { CreateStyled } from '@emotion/styled'
import { useTheme as _useTheme } from 'emotion-theming'

import { CustomTheme } from './theme'

export const useTheme = (...args: Parameters<typeof _useTheme>) =>
  _useTheme<CustomTheme>(...args)
export default styled as CreateStyled<CustomTheme>
