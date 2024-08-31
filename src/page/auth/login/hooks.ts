import { ChangeEvent, MouseEvent, useState } from "react";
import { useAppDispatch } from './../../../lib'

import { UserData } from "./";
import { auth } from './../../../lib'

export const useLogin = () => {
    const { fetchUserLogin } = auth
    const dispatch = useAppDispatch();
    const [userData, setUserData] = useState<UserData>({} as UserData);

    const updateField = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setUserData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (event: MouseEvent<HTMLElement>) => {
        event.preventDefault();
        dispatch(fetchUserLogin(userData))
    };

    return ({ updateField, handleSubmit, })
}