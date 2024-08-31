import { useMemo } from "react"

const TOKEN_KEY = 'token'

export const useAuth = () => {
    const token = localStorage.getItem(TOKEN_KEY)

    const isAuthenticated = token

    return useMemo(() => ({ isAuthenticated }), [isAuthenticated])
}