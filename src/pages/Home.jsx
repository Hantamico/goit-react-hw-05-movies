import { useEffect, useState } from "react";
import TrendingList from "components/TrendingList/TrendingList";
import Title from "components/Title/Title";
import FilmAPI from "../services/film-api";



const Home = () => {
    const [trending, setTrending] = useState([]);

    useEffect(() => {
         FilmAPI
            .fetchTrending()
            .then(({results}) => setTrending(results))
            .catch(err => console.error(err));
    }, [])
    
    return (
        <>
            <Title titleMessage="Popular Films"/>
            <TrendingList filmList={trending}/>
        </>
    )
}

export default Home;