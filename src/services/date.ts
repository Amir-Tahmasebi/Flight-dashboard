export const getMonthANDDay = (date: string) => {
    const payload = new Date(date);
    const dateString = payload.toDateString()
    const currentDate = dateString.slice(4, 10)
    return currentDate
}

export const getTime = (date: string) => {
    const payload = new Date(date)
    const hour = payload.getHours()
    const minute = payload.getMinutes()
    return `${hour}:${minute}`
}