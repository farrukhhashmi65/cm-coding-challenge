import Paper from '@mui/material/Paper'
import { styled } from '@mui/material/styles'

const HighlightCard = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.primary.contrastText
}))

export default HighlightCard
