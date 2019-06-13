import { of, from } from 'rxjs'
import { map, catchError, switchMap } from 'rxjs/operators'
import axios from 'axios'
import { API_URL, API_KEY } from '../config'
import { action } from '../utils'
import { GET_RECOMMENDATIONS, PENDING, REJECTED, FULFILLED } from '../constants'

export function getRecommendationsEpic (action$) {
    return action$.ofType(PENDING(GET_RECOMMENDATIONS)).pipe(
        switchMap( ({ payload }) =>
            from(axios.get(`${API_URL}${payload}/recommendations?api_key=${API_KEY}&language=en-US`)).pipe(
                map(res => action(FULFILLED(GET_RECOMMENDATIONS), res.data)),
                catchError(err => of(action(REJECTED(GET_RECOMMENDATIONS), err)))
            )
        )
    )
}