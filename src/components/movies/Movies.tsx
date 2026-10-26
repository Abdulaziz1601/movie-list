import { useEffect, useRef, useState } from 'react';

import MovieService from '../../services/MovieService';
import type { Movie } from '../../types';
import play from '../../resources/play.svg';

import './movies.scss';

interface MoviesProps {
  onMovieSelected: (id: string) => void;
}

const MAX_MOVIES = 4;

const Movies = ({ onMovieSelected }: MoviesProps) => {
  const { getAllMovies } = MovieService();

  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    getAllMovies().then((res) => setMovies(res.slice(0, MAX_MOVIES)));
    // getAllMovies returns a fresh closure each render; we only want this once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSelect = (movie: Movie, index: number) => {
    setSelectedIndex(index);
    onMovieSelected(movie.id);
    itemRefs.current[index]?.focus();
  };

  return (
    <section className="movies">
      <h1 className="movies__title">Continue Watching | {movies.length} Movies</h1>
      <div className="movies__wrapper">
        {movies.map((movie, index) => {
          const isSelected = index === selectedIndex;
          const clazz = isSelected
            ? 'movies__block movies__block_selected'
            : 'movies__block';
          return (
            <div
              className={clazz}
              style={{
                background: `url('${movie.img}') center center/cover no-repeat`,
              }}
              key={movie.id}
              role="button"
              tabIndex={0}
              onClick={() => handleSelect(movie, index)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleSelect(movie, index);
                }
              }}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            >
              <div className="movies__info">
                <div className="movies__info-inner">
                  <img src={play} alt="Play" className="movies__play" />
                  <div className="movies__descr">
                    <div className="movies__name">{movie.name}</div>
                    <div className="movies__time">{movie.release}</div>
                  </div>
                </div>
                <div className="movies__duration">{movie.duration}</div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Movies;
