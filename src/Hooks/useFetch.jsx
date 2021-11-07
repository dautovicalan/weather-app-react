import React from 'react'
import { useState, useEffect } from 'react'

const useFetch = (url) => {
    const[data, setData] = useState(null);
    const[isPending, setIsPending] = useState(true);
    const[error, setError] = useState(null);

    const getJsonData = async (url) => {

        const response = await fetch(url);
        if(response.status !== 200){
            setError(true);
            throw new Error("Cannot fetch data");
        }
        const data = response.json();
        return data;
    }

    useEffect(() => {
        getJsonData('http://localhost:8000/cities')
            .then((data) => {
                setIsPending(false);
                setData(data);
                setError(false);
            })
            .catch((err) => {
                console.log(err)
                setError(true);
            });
    }, [url])

    return {data, isPending, error};
}

export default useFetch
