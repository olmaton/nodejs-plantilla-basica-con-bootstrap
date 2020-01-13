const {Router} = require('express')
const router = new Router()

router.get('/',(req,res)=>{
    res.render('index',{title:"Inicio"});
})

router.get('/nosotros',(req,res)=>{
    res.render('nosotros',{title:"Nosotros"});
})
  

router.get('/servicios',(req,res)=>{
    res.render('servicios',{title:"Servicios"});
})
  

router.get('/contacto',(req,res)=>{
    res.render('contacto',{title:"Contacto"});
})

router.get('/modulo/otro',(req,res)=>{
    res.render('modulo/otro',{title:"Desde otro módulo"});
})
  
module.exports = router;