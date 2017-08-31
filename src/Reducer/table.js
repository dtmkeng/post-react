
let initaiState ={
    time:[],
    title:'',
    weight:'',
    table:'',

}
export default function Table(state=initaiState,action){
        switch(action.type){
            case "SAVE_TABLE":{
                state={
                    ...state,
                    table:{
                        title:state.title=action.insert.title,
                        weight:state.weight=action.insert.weight,
                        time:[...state,action.playload],
                    }
                }
                console.log("SAVE SUCCSESS")
            }break;
        default:
        break;
    }
    return state;
}
/*
sub[
    {time:}
]
*/