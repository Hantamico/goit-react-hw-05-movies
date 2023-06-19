import PropTypes from 'prop-types';
import css from './FilmDescription.module.css'

const FilmDescription = ({ userScore, overview, genres }) => {
    return (
        <div>
            <p className={css.description__block}><span className={css.description__title}>userScore: </span>{userScore}</p>
            <p className={css.description__block}><span className={css.description__title}>Overview: </span>{overview}</p>
            <p className={css.description__block}><span className={css.description__title}>Genres</span></p>
            <ul className={css.description__genresList}>
                {genres.map(genre => {
                    return <li key={genre.id} className={css.description__genresItem}>{genre.name}</li>
            })}
            </ul>
        </div>);
};

FilmDescription.propTypes = {
    userScore: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
    }),),
}

export default FilmDescription;