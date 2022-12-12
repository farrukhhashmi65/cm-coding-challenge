import React from 'react'
import AppToolbar from '../../components/AppToolbar'
import Dropdown from '../../components/Dropdown'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import HighlightCard from '../../components/HighlightCard'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import DownloadIcon from '@mui/icons-material/Download'
import { useAppSelector } from '../../redux/reduxHooks'
import { useTranslation } from 'react-i18next'

const AbsenceManager: React.FC<any> = (): JSX.Element => {
  const { t } = useTranslation()
  const [absenceType, setAbsenceType] = React.useState('')
  const { loading } = useAppSelector((state) => state.absencesReducer)
  console.log('loading', loading)

  const onSelect = (value: string): void => {
    setAbsenceType(value)
  }

  return (
        <>
            <AppToolbar />
            <Box sx={{ p: 4 }}>
                <Grid container spacing={2} >
                    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                        <Box sx={{ p: 1 }}>
                            <HighlightCard>
                                <Typography variant="subtitle2">
                                    104
                                </Typography>
                                <Typography variant="caption" display="block">
                                    {t('totalAbsences')}
                                </Typography>
                            </HighlightCard>
                        </Box>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                        <Box sx={{ p: 1 }}>
                            <Dropdown label={t('absenceType')} value={absenceType} onSelect={onSelect} />
                        </Box>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                        <Box sx={{ p: 1 }}>
                            <TextField
                                id="date"
                                label={t('startDate')}
                                type="date"
                                fullWidth
                                InputLabelProps={{
                                  shrink: true
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                        <Box sx={{ p: 1 }}>
                            <TextField
                                id="date"
                                label={t('endDate')}
                                type="date"
                                fullWidth
                                InputLabelProps={{
                                  shrink: true
                                }}
                            />
                        </Box>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                        <Box sx={{ p: 1 }}>
                            <Button variant="outlined" startIcon={<DownloadIcon />} size="large" fullWidth sx={{ p: 1.7 }}>
                                {t('downloadICal')}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
  )
}

export default AbsenceManager
