const express = require('express');
const router = express.Router();

router.get('/',(req, res)=> {
   res.render("admin/index");
});

router.get('/posts', (req, res)=>{
   res.send('Posts page');
});

router.get('/categorys',(req, res)=>{
   res.render("admin/categorys");
});

router.get('/categorys/add', (req,res)=>{
   res.render('admin/addCategorys');
});

module.exports = router;