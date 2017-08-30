export function SAVE_DATA(data,obj){
    return{
        type:"SAVE_TABLE",
        playload:data,
        insert:obj
    }
}