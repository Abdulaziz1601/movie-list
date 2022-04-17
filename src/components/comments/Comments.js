import { useEffect, useState } from 'react';

import MovieService from '../../services/MovieService';
import './comments.scss'
const  Comments = (props) =>  {
    const { getCommentsById } = MovieService();

    const [comments, setComments] = useState([]);

    useEffect(() => {
        getCommentsById(props.movieId).then(res=>setComments(res));
    }, [props.movieId]);

    const renderItems = (arr) => {
        return arr.map(c => (
            <div className="comments__item" key={c.id}>
                <div className="comments__title">{c.username}</div>
                <div className="comments__descr">{c.comment}</div>
            </div>
        ));
    }

    const items = renderItems(comments);

  return (
    <div className="comments">
        <div className="comments__header">
            <h2 className='comments__header-title'>Comments</h2>
        </div>
        <div className="comments__wrapper">
            {items}
        </div>
    </div>
  )
};

export default Comments;
