import { ComponentProps } from 'react'
import { FlightType } from './../../types'

export type Props = {
    flight: FlightType
} & ComponentProps<'div'>