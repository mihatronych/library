import {$authHost, $host} from "./index";

export const fetchAuthor = async () => {
    const {data} = await $host.get('api/author/')
    console.log(data)
    return data
}
export const createPublication = async (publication) => {
    const {data} = await $authHost.post('api/publication/', publication)
    console.log(data)
    return data
}
export const fetchPublication = async () => {
    const {data} = await $host.get('api/publication/')
    return data
}

export const fetchPublicator = async () => {
    const {data} = await $host.get('api/Publicator/')
    return data
}

export const fetchOnePublication = async (id) => {
    const {data} = await $host.get('api/publication/' + id)
    return data
}

export  const fetchRegion = async () => {
    const {data} = await $host.get('api/Region/')
    return data
}

export const fetchType = async () => {
    const {data} = await $host.get('api/type/')
    console.log(data)
    return data
}