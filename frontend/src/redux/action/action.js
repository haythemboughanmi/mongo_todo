import axios from "axios"
import { GETTODOS } from "../types/types"
export const get_todos=()=>async(dispatch)=>{
    try {
        const res=await axios.get("/get")
        dispatch({type:GETTODOS,payload:res.data})

        
    } catch (error) {
        console.log(error)
    }
}
export const add_todo=(data)=>async(dispatch)=>{
    try {
        const res=await axios.post('/add',data)
        dispatch(get_todos())
    } catch (error) {
        console.log(error)
    }
}
export const delete_todo=(id)=>async(dispatch)=>{
    try {
        const res=await axios.delete('/delet/'+id)
        dispatch(get_todos())
    } catch (error) {
        console.log(error)
    }
}
export const update_todo=(id,data)=>async(dispatch)=>{
    try {
        const res=await axios.put('/put/'+id,data)
        dispatch(get_todos())
    } catch (error) {
        console.log(error)
    }
}