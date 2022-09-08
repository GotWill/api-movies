import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { apiKey } from "../../config/key"
import * as C from './styles'
import { Movies } from "../../types/Movies"
import { Loading } from "../../components/loading"


export const About = () => {
    const params = useParams()
    const [loading, setLoading] = useState(false)
    const [movie, setMovie] = useState<Movies>()
    const urlImg = "https://image.tmdb.org/t/p/w500"

    useEffect(() => {
        setLoading(false)
        handleDatails()
        setLoading(true)

    }, [params.id])

    const handleDatails = async () => {
        fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US`)
            .then(response => response.json())
            .then(data => setMovie(data))
    }

    return (
        <C.Container>
            {!loading && <Loading />}

            {movie && loading &&

                <C.Movie>
                    <C.img src={`${urlImg}${movie?.poster_path}`} alt={movie?.title} />
                    <C.Details>
                        <C.MovieTitle>{movie?.title}</C.MovieTitle>
                        <C.Sinopse>{movie?.overview}</C.Sinopse>
                        <C.ReleaseDate>{movie?.release_date}</C.ReleaseDate>
                        <Link to="/">
                            <C.Button>Voltar</C.Button>
                        </Link>

                    </C.Details>
                </C.Movie>

            }


        </C.Container>
    )
}