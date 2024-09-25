import type { Interpolation, Theme } from '@emotion/react'

export const selectorButtonCss: Interpolation<Theme> = (theme) => ({
  cursor: 'pointer',
  position: 'relative',
  padding: '5px 10px',
  borderStyle: 'solid',
  borderWidth: '1px',
  borderLeftWidth: 0,

  '&:firstOfType': {
    borderLeftWidth: '1px',
    borderTopLeftRadius: '3px',
    borderBottomLeftRadius: '3px',
  },

  '&:lastOfType': {
    borderTopRightRadius: '3px',
    borderBottomRightRadius: '3px',
  },

  backgroundColor: theme.TAB_BACK_COLOR,

  '&:hover': {
    backgroundColor: theme.TAB_BACK_HOVER_COLOR,
  },

  borderColor: theme.TAB_BORDER_COLOR,
})

export const selectorButtonSmallCss = {
  padding: '0px 8px',
  fontSize: '0.8em',
}

export const selectorButtonSelectedCss: Interpolation<Theme> = (theme) => ({
  backgroundColor: theme.TAB_BACK_SELECTED_COLOR,
})
