import * as React from 'react'
import { SxProps } from 'theme-ui'
import { SpaceProps } from 'styled-system'

export interface ThemeUIProps extends SxProps, SpaceProps {
  as?: React.ElementType
  variant?: string
}
