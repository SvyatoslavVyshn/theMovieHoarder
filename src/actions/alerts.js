import { REMOVE_ALERT, ADD_ALERT } from '../constants'

export function removeAlert (id) {
    return {
        type: REMOVE_ALERT,
        payload: { id }
    }
}

export function addAlert (message) {
    return {
        type: ADD_ALERT,
        payload: { message }
    }
}