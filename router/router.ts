import {Router} from 'express'
import {Todo} from '../models/todo'
let todo:Todo[] =[]
const router=Router()

router.get('/',(req,res)=>{
    res.status(200).json({todo:todo})
})
router.post('/todo',(req,res)=>{
    console.log(req.body.name,'sending name form postman')
    const todonew:Todo={
        id:new Date().getTime(),
        name:req.body.name
    }
    todo.push(todonew)
    console.log(todo)
    res.status(200).json({message:'success'})
})
router.post('/delete/:tid',(req,res)=>{
    const id=+req.params.tid
    const find=todo.findIndex(e=>e.id===id)
    if(find===-1){
        return res.status(400).json({message:'item not found'})
    }
   todo=todo.filter(e=>e.id!=id)
  
   res.status(200).json({message:'item deleted',todo:todo})

})
router.put('/edit/:tid',(req,res)=>{
    const tid=+req.params.tid
    const find=todo.findIndex(e=>e.id===tid)
    if(find===-1){
        return res.status(400).json({message:'item not found'})
    }
   todo[find]={id:todo[find].id,name:req.body.name}
  
   res.status(200).json({message:'item edited',todo:todo})

})
export default router