import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer _9nbhfRE5Zwj7td5mz0r3OFrriOaHoIbAzwOKTbGzD948OmRjeiCA6ZXPKYFrZD8OAfLppi-HeOci36WJkdvFPcTpCGqCnOXyPTPgklyh9hzEEiXdezouaDfiC6OX3Yx'
    }
});