const todos = require("../modal/todoSchema")

exports.addtodo=async(req,res)=>{
try {
    const todo=new todos(req.body)
    await todo.save()
    res.status(200).send({msg:"ok",todo})
} catch (error) {
    res.status(500).send(error)
}
}

exports.gettodo=async(req,res)=>{
    try {
        const todo=await todos.find()
        res.status(200).send({msg:"ok",todo})
    } catch (error) {
        res.status(500).send(error)
    }
    }
    exports.deletetodo=async(req,res)=>{
        try {
            const todo=await todos.findByIdAndDelete(req.params.id)
            res.status(200).send({msg:"ok",todo})
        } catch (error) {
            res.status(500).send(error)
        }
        }
        exports.uptodo=async(req,res)=>{
            try {
                const todo=await todos.findByIdAndUpdate(req.params.id ,{$set:req.body},{new:true})
                res.status(200).send({msg:"ok",todo})
            } catch (error) {
                res.status(500).send(error)
            }
            }
            exports.getonetodo=async(req,res)=>{
                try {
                    const todo=await todos.findById(req.params.id)
                    res.status(200).send({msg:"ok",todo})
                } catch (error) {
                    res.status(500).send(error)
                }
                }