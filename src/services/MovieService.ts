import axios from 'axios';
import type { Movie, Comment, RawMovie, RawComment } from '../types';
import { MOCK_MOVIES, MOCK_COMMENTS } from '../data/mockData';

const NO_INFO = 'No info 😢';

// When no API base URL is configured we run in "local" mode, serving the
// bundled demo data. This keeps the deployed portfolio demo working forever
// without depending on an external backend. Set VITE_API_BASE_URL to point the
// app at a real REST API instead.
const API_BASE = import.meta.env.VITE_API_BASE_URL;
const USE_LOCAL_DATA = !API_BASE;

// Session-scoped copy of comments so posts made in local mode persist while the
// page is open (reset on refresh, which is the expected demo behaviour).
const localComments: Record<string, Comment[]> = structuredClone(MOCK_COMMENTS);

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const MovieService = () => {
  const _transformMovies = (movie: RawMovie): Movie => ({
    id: movie.id,
    name: movie.title ? movie.title : NO_INFO,
    release: movie.release_date ? movie.release_date : NO_INFO,
    img: movie.movieImageUrl ? movie.movieImageUrl : NO_INFO,
    duration: movie.duration ? movie.duration : NO_INFO,
  });

  const _transformComments = (comment: RawComment): Comment => ({
    id: comment.id,
    username: comment.username,
    comment: comment.comment_msg,
  });

  const getAllMovies = async (): Promise<Movie[]> => {
    if (USE_LOCAL_DATA) {
      await delay(150); // simulate a small network latency
      return MOCK_MOVIES;
    }
    const res = await axios.get<RawMovie[]>(`${API_BASE}/movies`);
    return res.data.map(_transformMovies);
  };

  const getCommentsById = async (id: string): Promise<Comment[]> => {
    if (USE_LOCAL_DATA) {
      await delay(100);
      return localComments[id] ?? [];
    }
    const res = await axios.get<RawComment[]>(`${API_BASE}/movies/${id}/comments`);
    return res.data.map(_transformComments);
  };

  const postComment = async (
    movieId: string,
    username: string,
    comment: string,
  ): Promise<Comment> => {
    if (USE_LOCAL_DATA) {
      await delay(150);
      const newComment: Comment = {
        id: `local-${Date.now()}`,
        username,
        comment,
      };
      localComments[movieId] = [...(localComments[movieId] ?? []), newComment];
      return newComment;
    }
    const res = await axios.post<RawComment>(`${API_BASE}/movies/${movieId}/comments`, {
      username,
      comment_msg: comment,
    });
    return _transformComments(res.data);
  };

  return { getAllMovies, getCommentsById, postComment };
};

export default MovieService;
