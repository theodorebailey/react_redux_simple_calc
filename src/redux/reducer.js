import { WITHDRAW, DEPOSIT, INTEREST, CHARGES } from './actionTypes';

// create key in store
export const CALCULATOR_KEY = 'calculatorStore';

let initialState = {
    number: '',
    answer:''
}

export const reducer = (state = initialState, action) => {
    let {type, payload} = action
    
     switch(type){
        case WITHDRAW:
            return{
                ...state,
                ...payload,
                number:state.number.concat(action.payload)
           
                
            }

            case DEPOSIT:
                 try{
                   return {
                    ...state,
                    ...payload,
                    ans:eval(state.number).toString()
                   }

                }catch(err){
                    return {
                        ...state,
                        ...payload,
                        ans:'Error'
                    }
                }
            //    return{
            //        ...state,
            //        ...payload,
            //        ans:eval(state.number).toString()
            //    }

               case INTEREST:
                return{
                    ...state,
                    ...payload,
                    number:'',
                    ans:''
                }

                case CHARGES:
                    return{
                        ...state,
                        ...payload,
                        number:(state.number).slice(0,-1),
                        ans:''
                    }

                default: return state
    }
}