import axios from "axios";

import { Endpoints } from './../../../types'
import { UserData } from './'

export const fetchLogin = async (userData: UserData) =>
    await axios
        .post(Endpoints.LOGIN, userData)
        .then(res => res.data)
