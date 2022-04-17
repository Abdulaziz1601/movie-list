import Header from '../header/Header'
import Movies from '../movies/Movies';
import Banner from './Banner';
import Comments from '../comments/Comments';
import AddForm from '../addForm/AddForm';
import { useState } from 'react';
function App() {
    const [movieId, setMovieId] = useState(1);

    const onMovieSelected = (id) => setMovieId(id);

    return (
        <>
            <Header />
            <div className="app">
                <div className="app__inner">
                    <div className="app__inner-wrapper">
                        <Banner />
                        <Movies onMovieSelected={onMovieSelected}/>
                    </div>
                </div>
                <aside className="app__aside">
                    <Comments movieId={movieId}/>
                    <AddForm movieId={movieId}/>
                </aside>
            </div>
        </>
    );
}
  

  export default App;
  