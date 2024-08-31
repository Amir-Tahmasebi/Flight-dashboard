import { ApiServices } from ".";
import { FlightType } from "../../types";
import { useEffect, useState } from "react";

export const useFlight = (defaultPage:number, size:number) => {
    const [list, setList] = useState<FlightType[]>([]);
    const [total, setTotal] = useState(0);
    const [page, setPage] = useState(defaultPage);

    const payload = total / size;

    const handlePagination = () => {
        const currentPage = page < payload ? page + 1 : page;

        if (page === currentPage) return;

        ApiServices.getList(currentPage, size).then((res) => {
            setList((prev) => [...prev, ...res.result]);
            setTotal(res.total);
            setPage(currentPage);
        });
    };

    useEffect(() => {
        ApiServices.getList(page, size).then((res) => {
            setList(res.result);
            setTotal(res.total);
        });
    }, []);

    return {list, handlePagination, payload, page, total}
}