const BASE_URL = "http://ongapi.alkemy.org/api";

export async function getNews() {
    try {
        const url = `${BASE_URL}/news`
        const params = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        const response = await fetch(url, params)
        const result = await response.json();
        return result
    } catch (error) {
        console.log(error)
        return null
    }
    
}