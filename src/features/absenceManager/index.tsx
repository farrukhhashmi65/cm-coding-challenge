import React, { useState, useEffect } from 'react'
import AppToolbar from '../../components/AppToolbar'
import Paginate from '../../components/Paginate'
import Filter from './Filter'
import { useAppSelector } from '../../redux/reduxHooks'
import Container from '@mui/material/Container'
import { useTranslation } from 'react-i18next'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import Avatar from '@mui/material/Avatar'
import Chip from '@mui/material/Chip'
import Stack from '@mui/material/Stack'
import Paper from '@mui/material/Paper'
import { format } from 'date-fns'
import Typography from '@mui/material/Typography'
import ICalendar from '../../components/ICalendar'

const AbsenceManager: React.FC<any> = (): JSX.Element => {
  const { t } = useTranslation()
  const [listData, setListData] = useState<any>([])
  const [currentPage, setCurrentPage] = useState<number>(1)
  const [listDataPerPage] = useState<number>(10)

  const indexOfLastRecord: number = currentPage * listDataPerPage
  const indexOfFirstRecord: number = indexOfLastRecord - listDataPerPage
  const currentRecord: any = listData.slice(indexOfFirstRecord, indexOfLastRecord)

  const paginate = (event: React.ChangeEvent<any>, pageNumber: number): void => {
    console.log(event)
    setCurrentPage(pageNumber)
  }

  const {
    response: absences = [],
    loading
  } = useAppSelector((state: any) => state.absencesReducer.absences)

  useEffect(() => {
    if (loading === false && absences !== null) {
      setListData(absences)
    } else {
      setListData([])
    }
  }, [loading, absences])

  const getStatus = (item: any): any => {
    if (item.rejectedAt !== null) {
      return { label: 'Rejected', color: 'error' }
    } else if (item.confirmedAt !== null) {
      return { label: 'Confirmed', color: 'success' }
    } else {
      return { label: 'Requested', color: 'info' }
    }
  }

  return (
        <>
            <AppToolbar />
            <Filter />
            <Container maxWidth="md" sx={{ p: 2, mb: 8 }}>
                <Paginate
                    listDataPerPage={listDataPerPage}
                    totalRecord={listData.length}
                    paginate={paginate}
                />
                {currentRecord !== null && currentRecord.length > 0 &&
                <List sx={{ width: '100%' }}>
                    {currentRecord.map((item: any) => {
                      const startDate = new Date(item.startDate)
                      const endDate = new Date(item.endDate)
                      return (
                            <React.Fragment key={item.id}>
                                <ListItem alignItems="flex-start" sx={{ bgcolor: '#F8F8F8', mb: 2, p: 4 }}>
                                    <ListItemAvatar>
                                        <Avatar alt={item.user.name} src={item.user.image} />
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={
                                            <Typography
                                                component="div"
                                                variant="h6"
                                                color="text.primary"
                                                gutterBottom
                                            >
                                                {item.user.name}
                                            </Typography>
                                        }
                                        secondary={
                                            <React.Fragment>
                                                <Stack direction="column" spacing={1}>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        {format(startDate, 'dd-MMM-yyyy')} to {format(endDate, 'dd-MMM-yyyy')}
                                                    </Typography>
                                                    {item.memberNote !== '' && (
                                                        <Paper variant="outlined" sx={{ p: 1 }}>
                                                            <Typography variant="overline" display="block">
                                                                {t('memberNote')}
                                                            </Typography>
                                                            <Typography variant="caption" display="block">
                                                                {item.memberNote}
                                                            </Typography>
                                                        </Paper>
                                                    )}
                                                    {item.admitterNote !== '' && (
                                                        <Paper variant="outlined" sx={{ p: 1 }}>
                                                            <Typography variant="overline" display="block">
                                                                {t('admitterNote')}
                                                            </Typography>
                                                            <Typography variant="caption" display="block">
                                                                {item.admitterNote}
                                                            </Typography>
                                                        </Paper>
                                                    )}
                                                    <Stack direction="row" spacing={1}>
                                                        <Chip label={item.type} color="primary" variant="outlined" size="small" sx={{ maxWidth: 100 }} />
                                                        <Chip label={getStatus(item).label} color={getStatus(item).color} variant="filled" size="small" sx={{ maxWidth: 100 }} />
                                                        <ICalendar data={item}/>
                                                    </Stack>
                                                </Stack>
                                            </React.Fragment>
                                        }
                                    />
                                </ListItem>
                            </React.Fragment>
                      )
                    })}
                </List>}
            </Container>
        </>
  )
}

export default AbsenceManager
