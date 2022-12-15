import React, { useEffect } from 'react'
import Dropdown from '../../components/Dropdown'
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
import HighlightCard from '../../components/HighlightCard'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import { useAppSelector, useAppDispatch } from '../../redux/reduxHooks'
import { useTranslation } from 'react-i18next'
import Container from '@mui/material/Container'
import { getAbsencesRequest, getAbsencesDataRequest } from '../../redux/actions/absencesActions'
import FilterIcon from '@mui/icons-material/FilterAltSharp'

interface Error {
  [key: string]: any
  startDate: string
  endDate: string
}

const Filter: React.FC<any> = (): JSX.Element => {
  const { t } = useTranslation()
  const [absenceType, setAbsenceType] = React.useState<string>('')
  const [startDate, setStartDate] = React.useState<string>('')
  const [endDate, setEndDate] = React.useState<string>('')
  const [active, setActive] = React.useState<boolean>(false)
  const [errors, setErrors] = React.useState<Error>({ startDate: '', endDate: '' })

  const {
    response
  } = useAppSelector((state: any) => state.absencesReducer.absencesData)

  const dispatch = useAppDispatch()

  const onSelectDropdown = (value: string): void => {
    setAbsenceType(value)
  }

  useEffect(() => {
    dispatch(getAbsencesRequest({}))
    dispatch(getAbsencesDataRequest())
  }, [])

  const onSubmitFilter = (): void => {
    if (startDate !== '' && endDate !== '' && startDate > endDate) {
      setErrors({ startDate: t('dateError'), endDate: t('dateError') })
      return
    }
    setErrors({ startDate: '', endDate: '' })
    setActive(true)
    dispatch(getAbsencesRequest({ startDate, endDate, absenceType }))
  }

  const onStartDateChange = (event: any): void => {
    setStartDate(event.target.value)
  }

  const onEndDateChange = (event: any): void => {
    setEndDate(event.target.value)
  }

  return (
        <>
            <Container fixed sx={{ mt: 4 }}>
                <Grid container spacing={2} >
                    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                        <Box sx={{ p: 1 }}>
                            <HighlightCard>
                                <Typography variant="subtitle2">
                                    {response?.totalAbsences ?? 0}
                                </Typography>
                                <Typography variant="caption" display="block">
                                    {t('totalAbsences')}
                                </Typography>
                            </HighlightCard>
                        </Box>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                        <Box sx={{ p: 1 }}>
                            <Dropdown label={t('absenceType')}
                                dropdownList={response?.absencesTypes ?? []}
                                value={absenceType}
                                onSelect={onSelectDropdown}
                            />
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
                                onChange={onStartDateChange}
                                error={Boolean(errors?.startDate)}
                                helperText={errors?.startDate}
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
                                onChange={onEndDateChange}
                                error={Boolean(errors?.endDate)}
                                helperText={errors?.endDate}
                            />
                        </Box>
                    </Grid>
                    <Grid item xl={3} lg={3} md={6} sm={12} xs={12}>
                        <Box sx={{ p: 1 }}>
                            <Button variant="outlined" color={active ? 'secondary' : 'primary'} startIcon={<FilterIcon />} size="large" fullWidth sx={{ p: 1.7 }} onClick={() => onSubmitFilter()}>
                                {t('filter')}
                            </Button>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
  )
}

export default Filter
