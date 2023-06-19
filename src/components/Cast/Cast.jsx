import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import filmAPI from "services/film-api";
import css from "./Cast.module.css"
import notFoundImage from '../../img/notFoundImage.png'

const Cast = () => {
    const [actors, setActors] = useState(null);
    const params = useParams();

    useEffect(() => {
        filmAPI
            .fetchCast(params.movieId)
            .then(data => setActors(data))
            .catch(err => console.log(err));
    }, [params.movieId]);
    

    return (
        <>
            {actors &&
                <ul className={css.cast__gallery}>
                    {actors.cast.map(actor => {
                        return (<li className={css.castList__item} key={actor.id}>
                            <img className={css.cast__img} src={actor.profile_path === null ? notFoundImage : `https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt="" />
                            <div className={css.castList__block}>
                                <p className={css.castList__text}> Name: {actor.name}</p>
                                <p className={css.castList__text}>Character: {actor.character}</p>
                            </div>
                        </li>);
                    })} 
                </ul>}
        </>
    );

            
};

export default Cast;