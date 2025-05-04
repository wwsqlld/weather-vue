const API_KEY = import.meta.env.VITE_API_KEY;
const API_URL = "https://api.weatherapi.com/v1"

export const getWeather = async (city) => {
    const response = await fetch(`${API_URL}/current.json?key=${API_KEY}&q=${city}`)
    const data = await response.json();
    return data 
}