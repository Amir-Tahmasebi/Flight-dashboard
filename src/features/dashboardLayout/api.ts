import axios from "axios";

import { Endpoints } from '../../types'

export const fetchLogout = async () =>
    await axios
        .post(Endpoints.LOGOUT)
        .then(res => res.data)

export const fetchUsername = async () => await
    axios
        .get(Endpoints.USERNAME)
        .then(res => res.data)