const express=require("express")
const todorouter=express.Router()
const {addtodo ,getonetodo, gettodo,deletetodo,uptodo}=require("../controllers/todoscontrollers")
todorouter.post("/add",addtodo) 
todorouter.get("/get",gettodo)
todorouter.delete("/delet/:id",deletetodo)
todorouter.put("/put/:id",uptodo)
todorouter.get("/getone/:id",getonetodo)
module.exports=todorouter