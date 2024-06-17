import { experimental_extendTheme as extendTheme } from '@mui/material/styles'

declare module '@mui/material/styles' {
  interface Theme {
    trello: {
      [key: string]: string
    }
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    trello?: {
      [key: string]: string
    }
  }
}

export const app_bar_height = '58px'
export const board_bar_height = '60px'
export const columns_header_height = '50px'
export const columns_footer_height = '56px'
export const board_content_height = `calc(100vh - ${app_bar_height} - ${board_bar_height})`

const theme = extendTheme({
  trello: {
    appBarHeight: app_bar_height,
    boardBarHeight: board_bar_height,
    boardContentHeight: board_content_height,
    columnHeaderHeight: columns_header_height,
    columnFooterHeight: columns_footer_height
  },
  // colorSchemes: {
  //   light: {
  //     palette: {
  //       primary: teal,
  //       secondary: deepOrange
  //     }
  //   },
  //   dark: {
  //     palette: {
  //       primary: cyan,
  //       secondary: orange
  //     }
  //   }
  // },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          '*::-webkit-scrollbar': {
            width: '4px',
            height: '4px'
          },
          '*::-webkit-scrollbar-thumb': {
            background: '#dcdde1',
            borderRadius: '4px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            background: 'white',
            borderRadius: '4px'
          }
        }
      }
    },
  }
})

export default theme
