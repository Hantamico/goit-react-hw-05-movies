import { Link } from "react-router-dom";
import css from './TrendingList.module.css'


const TrendingList = ({ filmList }) => {
    return (
        <ul className={css.trendingList__gallery}>
            {filmList.map(film => {
                return (
                    <li className={css.trendingList__item} key={film.id}>
                        <Link className={css.trendingList__url} to={`movies/${film.id}`}>
                            {<img className={css.trendingList__img} src={`https://image.tmdb.org/t/p/w500/${film.poster_path}`} alt={film.title} />}
                            <p className={css.trendingList__itemTitle}>{film.title}</p>
                        </Link>
                    </li>
                );
            })}
        </ul>
    )
};


export default TrendingList;