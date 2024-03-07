import { INCREMENT } from "./actionType"
import{DCREMENT}from "./actionType"
import { SHOW } from "./actionType"


export const handlePlus=()=>{
    return {
        type:INCREMENT
    }
}
export const handleMoins=()=>{
    return{
        type:DCREMENT
    }
  
    }
    export const handleShow=()=>{
        return{
            type:SHOW
        }
    }

   