
/* eslint-disable */
import React from "react";
import ICalendarLink from "react-icalendar-link";
import { useTranslation } from 'react-i18next'
import './style.css';

const ICalendar = (props) => {
  const { t } = useTranslation()
  const { startDate, endDate, type } = props.data;
  const event = {
    title: "Absence",
    description: type,
    startTime: Date.now(startDate),
    endTime:  Date.now(endDate),
    location: "Crewmeister, Germany",
    attendees: [
      "Hey <hey@test.com>",
    ]
  }

  return (
    <>
      <ICalendarLink event={event}>
        {t('addToCall')}
      </ICalendarLink>
      </>
   
  )
}

export default ICalendar