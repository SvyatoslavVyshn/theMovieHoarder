import { GET_MOVIES, SEARCH_MOVIE, CHANGE_QUERY, CHANGE_PAGE, FULFILLED } from '../constants'
import { handleRequestStates } from '../utils'

const INIT_STORE = {
     query: '',
     currentPage: 0, 
     pending: false 
}

export default function movies (state = INIT_STORE, {type, payload}) {
    switch(type){
        case FULFILLED(GET_MOVIES): {
            return {
                ...state,
                ...payload,
                pending: false
            }
        }

        case FULFILLED(SEARCH_MOVIE) : {
            return {
                ...state,
               ...payload
            }
        }

        case CHANGE_QUERY : {
            return {
                ...state,
                query: payload
            }
        }

        case CHANGE_PAGE : {
            return {
                ...state,
                currentPage: payload
            }
        }
        
        default:
            return handleRequestStates(type, state, [GET_MOVIES])
    }
}