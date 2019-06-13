import { PENDING, GET_RECOMMENDATIONS } from '../constants'

// export function getRecommendations (movieID) {
//     return function(dispatch) {
//         axios.get(`${API_URL}${movieID}/recommendations?api_key=${API_KEY}&language=en-US`)
//             .then((res) => {
//                 dispatch({type: RECEIVE_RECOMMENDATIONS, payload: res.data})
//             })
//             .catch((err) => {
//                 dispatch({type: RECEIVE_RECOMMENDATIONS_ERROR, payload: err})
//             })
//     }
// }

export function getRecommendations (movieID) {
    return {
        type: PENDING(GET_RECOMMENDATIONS),
        payload: movieID
    }
}
