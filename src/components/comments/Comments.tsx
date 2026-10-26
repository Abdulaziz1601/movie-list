import { useEffect, useState } from 'react';

import MovieService from '../../services/MovieService';
import type { Comment } from '../../types';
import './comments.scss';

interface CommentsProps {
  movieId: string;
  /** Changing this value forces an immediate re-fetch (e.g. after a new post). */
  refreshKey?: number;
}

const Comments = ({ movieId, refreshKey }: CommentsProps) => {
  const { getCommentsById } = MovieService();

  const [comments, setComments] = useState<Comment[]>([]);

  useEffect(() => {
    let active = true;

    getCommentsById(movieId).then((res) => {
      if (active) setComments(res);
    });

    return () => {
      active = false;
    };
    // Re-fetch when the selected movie changes or a comment is posted.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieId, refreshKey]);

  return (
    <div className="comments">
      <div className="comments__header">
        <h2 className="comments__header-title">Comments</h2>
      </div>
      <div className="comments__wrapper">
        {comments.length === 0 ? (
          <div className="comments__empty">No comments yet. Be the first!</div>
        ) : (
          comments.map((c) => (
            <div className="comments__item" key={c.id}>
              <div className="comments__title">{c.username}</div>
              <div className="comments__descr">{c.comment}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Comments;
