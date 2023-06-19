import FilmDescription from "components/FilmDescription/FilmDescription";
import Title from "components/Title/Title";
import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import filmAPI from "services/film-api";
import css from './FilmInfo.module.css'

const FilmInfo = () => {
    const params = useParams();
    const [movieInfo, setMovieInfo] = useState(null);
    
    useEffect(() => {

        filmAPI
            .fetchDetails(params.movieId)
            .then(film => setMovieInfo(film))
            .catch(error => console.log(error));
    },[params.movieId])
    
    
    
    return (
    <>
            {movieInfo &&
                <div className="movie__mainDescription">
                    <div className={css.movie__mainDescriptionWrapper}>
                        <img className={css.movie_img} src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`} alt={movieInfo.title}  />
                        <div>
                            <Title titleMessage={movieInfo.title} />
                            <FilmDescription userScore={movieInfo.vote_average} overview={movieInfo.overview} genres={movieInfo.genres}/>
                        </div>
                    </div>
                    <ul className={css.movie_linkList}>
                        <li><Link className={css.movie_link} to="cast">Cast</Link></li>
                        <li><Link className={css.movie_link} to="reviews">Reviews</Link></li>
                    </ul>
                    <Outlet/>
            </div>}
    </>
    )
}

export default FilmInfo