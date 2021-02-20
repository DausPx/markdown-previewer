import { combineReducers } from 'redux';
import { textArea } from './textArea';


const reducers = combineReducers({
    textAreaModule: textArea,
    
});

export default reducers;