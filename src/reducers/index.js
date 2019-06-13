import { combineReducers } from 'redux';
import movies from './movies'
import details from './details'
import recommendations from './recommendations'
import alerts from './alerts'

export default combineReducers({
    alerts,
    movies,
    details,
    recommendations
})