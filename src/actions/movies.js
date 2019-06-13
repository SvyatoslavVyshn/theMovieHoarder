import { GET_MOVIES, SEARCH_MOVIE, CHANGE_QUERY, CHANGE_PAGE, PENDING } from '../constants'

export function getMovies (page) {
    return {
        type: PENDING(GET_MOVIES),
        payload: page
    }
}

export function movieSearch (query) {
    return {
        type: PENDING(SEARCH_MOVIE),
        payload: query
    }
}

export function handleQuery (query) {
    return {
        type: CHANGE_QUERY,
        payload: query
    }
}

export function handlePage (page) {
    return {
        type: CHANGE_PAGE,
        payload: page
    }
}
