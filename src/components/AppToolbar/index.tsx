import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useTranslation } from 'react-i18next'
import { useStyles } from './styles'

const AppToolbar: React.FC<any> = (): JSX.Element => {
  const { t } = useTranslation()
  const { classes } = useStyles()

  return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className={classes.appBar} >
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {t('appTitle')}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
  )
}

export default AppToolbar
