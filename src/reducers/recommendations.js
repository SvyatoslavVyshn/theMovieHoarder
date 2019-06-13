import { GET_RECOMMENDATIONS, FULFILLED } from '../constants'
import { handleRequestStates } from '../utils'

export default function recommendations (state = { pending: false }, {type, payload}) {
    switch(type){
        case FULFILLED(GET_RECOMMENDATIONS): {
            return {
                ...state,
                data: payload.results,
                pending: false
            }
        }
        
        default:
            return handleRequestStates(type, state, [GET_RECOMMENDATIONS])
    }
}