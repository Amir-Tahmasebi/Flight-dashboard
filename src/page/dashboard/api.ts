import axios from "axios";

import { Endpoints } from "../../types";

export const getList = async (page?: number, size?: number) => await
    axios
        .get(Endpoints.LIST, {
            params: {
                page,
                size
            }
        })
        .then(res => res.data)