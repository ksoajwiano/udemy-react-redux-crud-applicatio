import { INCREMENT,DECREMENT } from '../actions'

const initialstate ={ value:0}


export default (state = initialstate,action)=>{
    case INCREMENT:
        return {value:state.value+1}
    case DECREMENT:
        return {value:state.value-1}
    default:
        return state
}






