export const SET_MESSAGE = "SET_MESSAGE";
export const REMOVE_MESSAGE = "REMOVE_MESSAGE";


export function setMessge(msg,alertType){
    return{
        type:SET_MESSAGE,
        msg,
        alertType
    }
}

export function removeMessge(){
    return{
        type:REMOVE_MESSAGE
    }
}