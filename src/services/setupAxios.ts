import { AppRoutes } from './../types'
import { PreferenceServices } from './../services'

const BASE_URL = process.env.REACT_APP_BASE_URL

export default function setupAxios(axios: any) {
    axios.defaults.baseURL = BASE_URL
    axios.defaults.headers.Accept = 'application/json'

    axios.interceptors.request.use(
        (config: any) => {
            const token = localStorage.getItem('token')

            if (!PreferenceServices.isSSR() && token) {
                config.headers['Authorization'] = `Bearer ${token}`
            }

            return config
        },
        (err: any) => {
            return Promise.reject(err)
        }
    )

    axios.interceptors.response.use(
        (resConfig: any) => {
            return resConfig
        },
        (resErr: any) => {
            if (resErr.response.status === 401 || resErr.response.status === 403) {
                window.location.replace(AppRoutes.LOGOUT)
                window.localStorage.removeItem('token')
            }
            return Promise.reject(resErr)
        }
    )
}
