const URL = "https://cheese-app-backend-ttt2.onrender.com"

export const cheesesLoader = async () => {
    const response = await fetch(URL + "/cheese")
    const cheeses = await response.json()
    return cheeses
}