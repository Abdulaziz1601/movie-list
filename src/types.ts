export interface Movie {
  id: string;
  name: string;
  release: string;
  img: string;
  duration: string;
}

export interface Comment {
  id: string;
  username: string;
  comment: string;
}

// Shapes returned by the mockapi.io backend before transformation.
export interface RawMovie {
  id: string;
  title?: string;
  release_date?: string;
  movieImageUrl?: string;
  duration?: string;
}

export interface RawComment {
  id: string;
  username: string;
  comment_msg: string;
}
