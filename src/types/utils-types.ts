export type TDateFormatterParams = {
  dateTime: string
  format: string
  time?: 'start' | 'end'
  locale?: string
  isUtc?: boolean
  timeZone?: string
}
