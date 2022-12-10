
interface PaletteColor {
  light?: string
  main: string
  dark?: string
  contrastText?: string
}

export const primary: PaletteColor = {
  main: '#ff9419',
  light: '#ffa547',
  contrastText: '#fff'
}

export const secondary: PaletteColor = {
  light: '#df505c',
  main: '#df505c',
  contrastText: '#fff'
}
