import axios from 'axios';

const movieBaseUrl = 'https://api.themoviedb.org/3';
const apiKey = '6a18f70cd72e6eb6624a9d8fbd6edf79';
// https://api.themoviedb.org/3/trending/all/day?api_key=6a18f70cd72e6eb6624a9d8fbd6edf79
const getTrendingVideos = axios.get(movieBaseUrl + '/trending/all/day?api_key=' + apiKey);


export default {getTrendingVideos};