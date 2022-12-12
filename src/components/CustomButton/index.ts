import { styled } from '@mui/material/styles'
import Button, { ButtonProps } from '@mui/material/Button'

const CustomButton = styled(Button)<ButtonProps>(({ theme }) => ({
  margin: theme.spacing(1),
  width: '100%',
  color: theme.palette.primary.contrastText,
  backgroundColor: theme.palette.primary.main,
  '&:hover': {
    backgroundColor: theme.palette.secondary.main
  },
  padding: theme.spacing(1.8)
}))

export default CustomButton
