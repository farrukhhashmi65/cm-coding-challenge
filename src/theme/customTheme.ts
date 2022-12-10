import { createTheme } from '@mui/material/styles'
import { primary, secondary } from './palette'

const customTheme = createTheme({
  palette: {
    primary,
    secondary
  }
})

export default customTheme
