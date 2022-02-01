const express = require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hola mundo desde nuestro servidor con Node y Express")
});

app.listen('3000',()=>{
    console.log("Servidor en linea en el puerto 3000 con Nodejs y Express")
});