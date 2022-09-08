import axios from 'axios'
import { apiKey } from '../config/key'
import { useParams } from 'react-router-dom'


const params = useParams()


export const Api = {

    getMovies: async () => {
        let response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        return response.data;
    },

    getDetailsMovies: async (id: string) => {
        let response = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
        return response.data;

    }
}