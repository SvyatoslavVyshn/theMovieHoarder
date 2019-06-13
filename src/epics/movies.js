import { of, from } from 'rxjs'
import { map, catchError, switchMap } from 'rxjs/operators'
import axios from 'axios'
import { API_URL, API_KEY } from '../config'
import { action } from '../utils'
import { GET_MOVIES, SEARCH_MOVIE, PENDING, REJECTED, FULFILLED } from '../constants'

export function getMoviesEpic (action$) {
    return action$.ofType(PENDING(GET_MOVIES)).pipe(
        switchMap( ({ payload }) =>
            from(axios.get(`${API_URL}popular?api_key=${API_KEY}&language=en-US&page=${payload}`)).pipe(
                map(res => action(FULFILLED(GET_MOVIES), res.data)),
                catchError(err => of(action(REJECTED(GET_MOVIES), err)))
            )
        )
    )
}

export function searchMoviesEpic (action$) {
    return action$.ofType(PENDING(SEARCH_MOVIE)).pipe(
        switchMap( ({ payload }) =>
            from(axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&language=en-US&query=${payload}`)).pipe(
                map(res => action(FULFILLED(SEARCH_MOVIE), res.data)),
                catchError(err => of(action(REJECTED(SEARCH_MOVIE), err)))
            )
        )
    )
}

