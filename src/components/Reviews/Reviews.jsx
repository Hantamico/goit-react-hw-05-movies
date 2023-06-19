import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import filmAPI from "services/film-api";
import css from './Reviews.module.css'

const Reviews = () => {
    const params = useParams();
    const [comments, setComments] = useState(null);



    useEffect(() => {

        filmAPI
            .fetchComments(params.movieId)
            .then(data => setComments(data))
            .catch(err => console.log(err))
        
    }, [params.movieId]);



    return (
        
        <>
            {comments ? <ul className={css.comments_list}>
                {comments.results.map(({ id, author, content }) => {
                    return (
                        <li className={css.comments_item} key={id}>
                            <p className={css.comments_commentAuthor}>{author}</p>
                            <p>{content}</p>
                        </li>
                    );
                })}
            </ul> :  <div>Reviews not found</div>}
        </>
    );
};

export default Reviews;