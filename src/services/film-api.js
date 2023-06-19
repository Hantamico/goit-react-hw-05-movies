    const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3NGM1NWQ0NTRiOTNkOWZlMmQ3MTliYTU0OTFkMGFhZSIsInN1YiI6IjY0ODZiZWQ2OTkyNTljMDBlMmY1ZTJiYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lZA3QdO-CO8RacWfdXTxr3QcRI0uSXUGbjg-1Lyr1oo'
        }
    };

export function fetchTrending() { 
    return fetch('https://api.themoviedb.org/3/trending/movie/day?language=en-US', options)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(new Error(`Error`))
        });
};

export function fetchDetails(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}?language=en-US`, options)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(new Error(`Error`))
        });
};

export function fetchCast(movieId) {
    return fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`, options)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(new Error(`Error`))
        });
}

export function fetchComments(movieId) {
        return fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`, options)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(new Error(`Error`))
        });
}

export function fetchByName(movieQuery) {
    return fetch(`https://api.themoviedb.org/3/search/movie?query=${movieQuery}&include_adult=false&language=en-US&page=1`, options)
        .then(res => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(new Error(`Error`))
        });
}

const filmAPI = {
    fetchTrending,
    fetchDetails,
    fetchCast,
    fetchComments,
    fetchByName,
}
export default filmAPI
