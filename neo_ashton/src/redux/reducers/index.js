import { combineReducers } from 'redux';
import login from './login';
import navigate from './navigate';


const Ashton = combineReducers({
    login,
    navigate
});

export default Ashton;
