export function SAVE_DATA(data,obj){
    return{
        type:"SAVE_TABLE",
        playload:data,
        insert:obj
    }
}
export function GET_DATA(data){
    return{
        type:'GET_DATA',
        playload:data
    }
}