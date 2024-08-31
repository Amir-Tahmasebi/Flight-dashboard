
import { useEffect } from "react";
import { useAppDispatch } from "../../lib";
import { auth, profile } from "./../../lib";
import { AppRoutes } from "../../types";
import { ApiServices } from ".";

export const useHeader = () => {
    const dispatch = useAppDispatch();

    const handleClick = () => {
        ApiServices.fetchLogout().then((res) => {
            if (res.result === "success") {
                window.location.replace(AppRoutes.LOGIN);
                dispatch(auth.Actions.handleLogout());
            }
        });
    };

    useEffect(() => {
        dispatch(profile.fetchUsername());
    }, []);

    return { handleClick }
}