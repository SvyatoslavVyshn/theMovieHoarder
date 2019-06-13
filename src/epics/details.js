import { of, from } from 'rxjs'
import { map, catchError, switchMap } from 'rxjs/operators'
import axios from 'axios'
import { API_URL, API_KEY } from '../config'
import { action } from '../utils'
import { PENDING, REJECTED, FULFILLED, GET_MOVIE_DETAILS, GET_MOVIE_CREDITS } from '../constants'

export function getMovieDetailsEpic (action$) {
    return action$.ofType(PENDING(GET_MOVIE_DETAILS)).pipe(
        switchMap( ({ payload }) =>
            from(axios.get(`${API_URL}${payload}?api_key=${API_KEY}&language=en-US`)).pipe(
                map(res => action(FULFILLED(GET_MOVIE_DETAILS), res.data)),
                catchError( err => of(action(REJECTED(GET_MOVIE_DETAILS), err)))
            )
        )
    )
}

export function getMovieCredits (action$) {
    return action$.ofType(PENDING(GET_MOVIE_CREDITS)).pipe(
        switchMap( ({ payload }) =>
            from(axios.get(`${API_URL}${payload}/credits?api_key=${API_KEY}&language=en-US`)).pipe(
                map(res => action(FULFILLED(GET_MOVIE_CREDITS), res.data)),
                catchError( err => of(action(REJECTED(GET_MOVIE_CREDITS), err)))
            ) 
        )
    )
}
