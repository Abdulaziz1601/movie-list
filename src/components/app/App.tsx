import { useState } from 'react';
import Header from '../header/Header';
import Movies from '../movies/Movies';
import Banner from './Banner';
import Comments from '../comments/Comments';
import AddForm from '../addForm/AddForm';

function App() {
  const [movieId, setMovieId] = useState<string>('1');
  // Bumped whenever a comment is posted, so the Comments panel refreshes immediately.
  const [commentsVersion, setCommentsVersion] = useState(0);

  const onMovieSelected = (id: string) => setMovieId(id);
  const onCommentPosted = () => setCommentsVersion((v) => v + 1);

  return (
    <>
      <Header />
      <div className="app">
        <div className="app__inner">
          <div className="app__inner-wrapper">
            <Banner />
            <Movies onMovieSelected={onMovieSelected} />
          </div>
        </div>
        <aside className="app__aside">
          <Comments movieId={movieId} refreshKey={commentsVersion} />
          <AddForm movieId={movieId} onCommentPosted={onCommentPosted} />
        </aside>
      </div>
    </>
  );
}

export default App;
