import {useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import filmAPI from "services/film-api";
import FindedFilmsList from "components/FindedFilmsList/FindedFilmsList";
import Title from "components/Title/Title";

const Movies = () => {
    const location = useLocation();
    const [films, setFilms] = useState(null);
    const [searchParams, setSearchParams] = useSearchParams();
    const filmQuery = searchParams.get("filmQuery") ?? "";

    function handleInput(e) {
        const filmInputValue = e.target.value;
        if (filmInputValue === "") {
            return setSearchParams({})
        }
        setSearchParams({filmQuery: filmInputValue})
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (filmQuery === "") {
            return;
        }

        filmAPI
            .fetchByName(filmQuery)
            .then(data => setFilms(data))
    }

    useEffect(() => {
        if (filmQuery === '') {
            return;
        }
        
        filmAPI
            .fetchByName(filmQuery)
            .then(data => setFilms(data))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Title titleMessage="Find film" />
            <form onSubmit={handleSubmit}>
                <input type="input" value={filmQuery} onChange={handleInput} />
                <button type="submit">Search</button>
            </form>
            {films && <FindedFilmsList location={location} filmList={films.results} />}
        </>
    );
}

export default Movies;