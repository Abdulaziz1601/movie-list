import axios from 'axios';
const MovieService = () => {
    const _apiBase = 'https://624b0e2171e21eebbcec0e9d.mockapi.io';

    const getAllMovies = async () => {
        const res = await axios.get(`${_apiBase}/movies`)
        return res.data.map(_transformMovies);
    }

    const getCommentsById = async (id) => {
        const res = await axios.get(`${_apiBase}/movies/${id}/comments`);
        return res.data.map(_transformComments);
    }

    const _transformMovies = (movie) => {
        return {
            id: movie.id,
            name: movie.title ? movie.title : "No info 😢" , 
            release: movie.release_date ? movie.release_date : "No info 😢" ,
            img: movie.movieImageUrl ? movie.movieImageUrl : "No info 😢" ,
            duration: movie.duration ? movie.duration : "No info 😢" 
        }
    }
    
    const _transformComments = (comment) => {
        return {
            id: comment.id,
            username: comment.username,
            comment: comment.comment_msg,
        }
    };


    return { getAllMovies, getCommentsById }
}

export default MovieService;