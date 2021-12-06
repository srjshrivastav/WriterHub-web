import {SET_MESSAGE,REMOVE_MESSAGE} from '../actions/apiErrorAlert'


export default function alertMessage(state=null,action){
    switch(action.type){
        case SET_MESSAGE:
            state = {
                message:action.msg,
                type:action.alertType
            };
            return state;
        case REMOVE_MESSAGE:
            state = null;
            return state;
        default:
            return state;
    }
}