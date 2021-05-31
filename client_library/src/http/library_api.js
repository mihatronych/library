import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

// export const createGamer = async (gamer) => {
//     const {data} = await $authHost.post('api/gamer', gamer)
//     return data
// }
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

export const fetchType = async () => {
    const {data} = await $host.get('api/type/')
    console.log(data)
    return data
}