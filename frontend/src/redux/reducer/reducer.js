import { GETTODOS } from "../types/types";

const  initialState = {
todos:[]
}

const reducer= (state = initialState, { type, payload }) => {
switch (type) {
    case GETTODOS:
        return {...state,todos:payload.todo}
        

    default:
       return state
}
 
    
}
export default reducer

