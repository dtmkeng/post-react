
let initaiState ={
    time:[],
    title:'',
    weight:''
}
export default function Table(state=initaiState,action){
        switch(action.type){
            case "SAVE_TABLE":{
                state={
                    ...state,
                    time:[...state,action.playload],
                    title:state.title=action.insert.title,
                    weight:state.weight =action.insert.weight
                }
            }break;
        default:
        break;
    }
    return state;
}
