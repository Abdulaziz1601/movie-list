import { useEffect, useState } from 'react';

import MovieService from '../../services/MovieService';
import play from '../../resources/play.svg';
import poster from '../../resources/movies__poster.png';

import './movies.scss';

const Movies = (props) => {
    const { getAllMovies } = MovieService();

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllMovies().then(res => setMovies(res));
    }, []);
    
    const renderMovies = (arr) => {
        return arr.map(movie => (
            <div className="movies__block" style={{background: `url('${movie.img}') center center/cover no-repeat`}} key={movie.id} onClick={() => props.onMovieSelected(movie.id)}>
                <div className="movies__info">
                    <div className='movies__info-inner'>
                        <img src={play} alt="play btn" className="movies__play" />
                        <div className="movies__descr">
                            <div className="movies__name">{ movie.name }</div>
                            <div className="movies__time">{ movie.release }</div>
                        </div>
                    </div>
                    <div className="movies__duration">{ movie.duration }</div>
                </div>
            </div>
        ))
    }
    const items = renderMovies(movies);
    return (
        <section className="movies">
            <h1 className="movies__title">Continue Watching  |  4 Movies</h1>
            <div className="movies__wrapper">
                {items}
            </div>
        </section>
    )
};

export default Movies;