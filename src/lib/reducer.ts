import { auth, profile } from './slice'

export const reducer = {
    auth: auth.reducer,
    profile: profile.reducer
}