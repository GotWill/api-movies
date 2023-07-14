import * as C from './styles'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { Movies } from '../../types/Movies'
import { apiKey } from '../../config/key'
import { Loading } from '../../components/loading'

export const Home = () => {

    useEffect(() => {
        setLoading(false)
        handleMovies()
        setLoading(true)
    })

    const [movies, setMovies] = useState<Movies[]>([])
    const [loading, setLoading] = useState(false)
    const handleMovies = async () => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }
    const urlImg = "https://image.tmdb.org/t/p/w500"
    return (
        <C.Container>
            {!loading && <Loading />}
            <C.Title>Movies</C.Title>

            {movies.length > 0 && loading &&
                <C.UlList>
                    {movies.map(movie => (
                        <C.LiMovies key={movie.id}>
                            <Link to={`/sobre/${movie.id}`}>
                                <C.img src={`${urlImg}${movie.poster_path}`} alt="" />
                            </Link>
                            <C.TitleMovie>{movie.title}</C.TitleMovie>
                        </C.LiMovies>
                    ))}
                </C.UlList>
            }

        </C.Container>
    )
}