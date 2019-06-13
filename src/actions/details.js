import { GET_MOVIE_DETAILS, GET_MOVIE_CREDITS, PENDING } from '../constants'

export function getMovieDetail (movieID) {
    return {
        type: PENDING(GET_MOVIE_DETAILS),
        payload: movieID
    }
}

export function getMovieCredits (movieID) {
    return {
        type: PENDING(GET_MOVIE_CREDITS),
        payload: movieID
    }
}