
const API_KEY = "f715be7ae4c5e04f67c1d4b54f3b9003"
const baseURL = "https://api.themoviedb.org/3"

const requests = {
    fetchTrending: `${baseURL}trending/all/week?api_key=${API_KEY}&language=en-US`,
}


export default baseURL;