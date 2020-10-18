import { Box, useTheme } from '@chakra-ui/core'
import { css } from '@emotion/core'
import React from 'react'

type SpinnerProps = {
  size?: 'sm' | 'md' | 'lg' | 'xl'
}

const sizes = {
  sm: '1rem',
  md: '2rem',
  lg: '4rem',
  xl: '8rem',
}

const weight = {
  sm: '0.1rem',
  md: '0.25rem',
  lg: '0.375rem',
  xl: '0.5rem',
}

const Spinner: React.FC<SpinnerProps> = ({ size = 'md' }) => {
  const theme = useTheme()

  return (
    <Box
      css={css`
        & > .spinner {
          width: ${sizes[size]};
          height: ${sizes[size]};
          border: ${weight[size]} solid ${theme.colors['disabled']};
          border-top: ${weight[size]} solid ${theme.colors['nightGreen']};
          border-radius: ${theme.radii.round};
          transition-property: transform;
          animation: rotate ${theme.durations.slow} infinite linear;
        }

        & > .spinner::before {
          content: '';
          border: none;
          border-width: 0;
        }
      `}
    >
      <div className="spinner"></div>
    </Box>
  )
}

export default Spinner
