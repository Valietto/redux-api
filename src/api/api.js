const BASE_URL = "https://jsonplaceholder.typicode.com/"

const thenRes = (r) => {
    if (r.ok) return r.json()
    throw new Error("Something went wrong")
}
export const getUsers = () => fetch(BASE_URL + "users").then(thenRes)

export const getUserById = (id) => fetch(BASE_URL + `users/${id}`).then(thenRes)

export const getAlbums = () => fetch(BASE_URL + "albums").then(thenRes)

export const getAlbumById = (id) => fetch(BASE_URL + `albums/${id}`).then(thenRes)

export const getAlbumPhotos = (id) => fetch(BASE_URL + `albums/${id}/photos`).then(thenRes)

export const getPhotos = () => fetch(BASE_URL + "photos").then(thenRes)

export const getUserAlbums = (id) => fetch(BASE_URL + `users/${id}/albums`).then(thenRes)
