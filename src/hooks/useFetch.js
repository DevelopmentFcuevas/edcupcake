import { useEffect, useState } from "react"
import { get } from "axios"

const useFetch = (endpoint) => {
    const [data, setData] = useState()
    const [error, setError] = useState()

    //le vamos a decir que haga la peticion
    useEffect(() => {
        get(`${process.env.REACT_APP_URL_API}${endpoint}`)
            .then(({data}) => setData(data)) //asigna por medio de setData el dato recibido desde la peticion
            .catch(err => setError(err)) //asigna por medio de setError el error recibido
    }, [endpoint])

    //return data
    return [data, error]
}

export default useFetch

