import { ReactNode, ComponentProps } from "react"

export type Props = {
    children: ReactNode
    iconClassName?: string
    endIcon?:ReactNode
} & ComponentProps<'button'>