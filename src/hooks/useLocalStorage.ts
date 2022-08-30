import { useState, useEffect } from "react";

function getStorageValue(key: string, defaultValue: any) {
    if (typeof window !== "undefined") {
        const saved = localStorage.getItem(key);
        const initial = JSON.parse(`${saved}`);
        return initial || defaultValue;
    }
}

export const useLocalStorage = (key: string, defaultValue: any) => {
    const [value, setValue] = useState(() => {

        if (value === "deleteAll") { localStorage.clear() }
        return getStorageValue(key, defaultValue);
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};