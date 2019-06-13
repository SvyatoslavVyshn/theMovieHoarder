import { GET_MOVIE_DETAILS, GET_MOVIE_CREDITS, FULFILLED } from '../constants'
import { handleRequestStates } from '../utils'

export default function details (state = { pending: false }, {type, payload}) {
    switch(type){
        case FULFILLED(GET_MOVIE_DETAILS): {
            return {
                ...state,
                data: payload,
                pending: false
            }
        }
        case FULFILLED(GET_MOVIE_CREDITS): {
            return {
                ...state,
                credits: payload,
                pending: false
            }
        }

        default:
            return handleRequestStates(type, state, [GET_MOVIE_DETAILS])
    }
}