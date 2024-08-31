type DstType = {
    airline: string
    country: string
    iso3: string
    time: string
}

type SrcType = {
    airline: string
    country: string
    iso3: string
    time: string
}

export type FlightType = {
    boarding: string
    class: string
    dst: DstType
    gates: number
    logoSrc: string
    logoStyle: object
    price: string
    seat: string
    src: SrcType
    transfer: boolean
}