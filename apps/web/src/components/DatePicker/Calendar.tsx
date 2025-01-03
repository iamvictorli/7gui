import type { CalendarProps, DateValue } from 'react-aria'

import { createCalendar } from '@internationalized/date'
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons'
import { useCalendar, useLocale } from 'react-aria'
import { useCalendarState } from 'react-stately'

import { CalendarButton } from './Button'
import { CalendarGrid } from './CalendarGrid'

export function Calendar(props: CalendarProps<DateValue>) {
  const { locale } = useLocale()
  const state = useCalendarState({
    ...props,
    locale,
    createCalendar,
  })

  const { calendarProps, prevButtonProps, nextButtonProps, title }
    = useCalendar(props, state)

  return (
    <div {...calendarProps} className="inline-block text-[var(--gray-12)]">
      <div className="flex items-center pb-4">
        <h2 className="ml-2 flex-1 text-xl font-bold">{title}</h2>
        <CalendarButton {...prevButtonProps}>
          <ChevronLeftIcon className="size-6" />
        </CalendarButton>
        <CalendarButton {...nextButtonProps}>
          <ChevronRightIcon className="size-6" />
        </CalendarButton>
      </div>
      <CalendarGrid state={state} />
    </div>
  )
}
