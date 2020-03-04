
import movies from './MovieService';

export default class MovieService {
    static getMovies() {
        return movies ? movies : [];
    }
}