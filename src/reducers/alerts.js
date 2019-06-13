import { REMOVE_ALERT } from '../constants'
const getId = () => `${Math.random()}-${Date.now()}`

function handleErrorMessages (error) {
    if(!error.response) {
        return [
            {
                id: getId(),
                text: error.message,
                title: 'Error',
                error: true
            }
        ]
    }
    if(error.response) {
        return [
            {
                id: getId(),
                text: error.response.statusText,
                title: `Error ${error.response.status}`,
                error: true
            }
        ]
    }
    return []
}


export default function alerts (state = [], {type, payload}) {
    if(type.match(new RegExp('_REJECTED$'))) {
        return [...state, ...handleErrorMessages(payload)]
    }

    switch(type) {
        case REMOVE_ALERT : {
            return state.filter( item => item.id !== payload.id )
        }

        default: 
            return state
    }
}