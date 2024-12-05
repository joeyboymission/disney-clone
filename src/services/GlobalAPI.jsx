// Imprt axios to make the API calls
import axios from 'axios';

// Contstants for the API and links references
const movieBaseUrl = 'https://api.themoviedb.org/3';
const apiKey = '6a18f70cd72e6eb6624a9d8fbd6edf79';
const movieByGenreBaseURL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

// Functions to get the trending videos and movies by genre
const getTrendingVideos = axios.get(movieBaseUrl + '/trending/all/day?api_key=' + apiKey);
const getMovieByGenreId = (id) => axios.get(movieByGenreBaseURL + '&with_genres=' + id);


export default {getTrendingVideos, getMovieByGenreId};