import dayjs from "dayjs"
import timezone from 'dayjs/plugin/timezone'
import utc from 'dayjs/plugin/utc'
import { TDateFormatterParams } from "types"

dayjs.extend(utc)
dayjs.extend(timezone)

export const dateFormatter = (props: TDateFormatterParams) => {
  const {
    dateTime,
    format,
    time,
    locale = 'id',
    isUtc = false,
    timeZone = 'Asia/Bangkok',
  } = props

  const dateOnly = dayjs(dateTime).format('YYYY-MM-DD')

  const getDateModified = (dateStr: string) =>
    isUtc ? dayjs.utc(dateStr) : dayjs.tz(dateStr, timeZone)
  const getDate = (dateStr: string) =>
    isUtc ? dayjs.utc(dateStr) : dayjs(dateStr).tz(timeZone)

  switch (time) {
    case 'start': {
      return getDateModified(dateOnly)
        .startOf('day')
        .locale(locale)
        .format(format)
    }
    case 'end': {
      return getDateModified(dateOnly)
        .endOf('day')
        .locale(locale)
        .format(format)
    }
    default: {
      return getDate(dateTime).locale(locale).format(format)
    }
  }
}