export function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength - 3) + '...' : str
}

export function debounce(func, wait, immediate) {
    var timeout
    return function() {
        var context = this,
            args = arguments
        var later = function() {
            timeout = null
            if (!immediate) func.apply(context, args)
        }
        var callNow = immediate && !timeout
        clearTimeout(timeout)
        timeout = setTimeout(later, wait)
        if (callNow) func.apply(context, args)
    }
}

export function handleRequestStates (type, state, actionTypes= ['ACTION_TYPE']) {
    const matchPart = actionTypes.join('|')

    const matchComplete = new RegExp(`^(${matchPart})(_REJECTED|_FULFILLED)$`)
    const matchPending = new RegExp(`^(${matchPart})_PENDING`)

    if(type.match(matchComplete)){
        return { ...state, pending: false }
    }
    if(type.match(matchPending)){
        return {...state, pending: true}
    }

    return state
}

export const action = (type, payload, meta) => ({ type, payload, meta })
