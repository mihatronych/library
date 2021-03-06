import {$authHost, $host} from "./index";

export const fetchMark = async () => {
    const {data} = await $host.get('api/mark/')
    console.log(data)
    return data
}

export const createMark = async (mark) => {
    const {data} = await $authHost.post('api/Mark/', mark)
    console.log(data)
    return data
}