import axios from 'axios'
import './../style.scss'
import { IOmdbResponse } from './models/IMovie';

const getMovies = async () => {
    const response = await axios.get<IOmdbResponse>("https://www.omdbapi.com/?apikey=b15f392c&s=harry");
    console.log(response.data.Search);
}
getMovies();