import { makeStyles } from 'tss-react/mui'

export const useStyles = makeStyles()((theme) => {
  return {
    appBar: {
      backgroundColor: 'rgba(255,148,25,0.85)',
      borderBottom: `${theme.spacing(0.25)} solid ${theme.palette.primary.main}`
    }
  }
})
