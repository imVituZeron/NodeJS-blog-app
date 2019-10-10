const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();
const Category = require('../models/Category');


router.get('/',(req, res)=> {
   res.render("admin/index");
});

router.get('/posts', (req, res)=>{
   res.send('Posts page');
});

router.get('/categorys',(req, res)=>{
   res.render("admin/categorys");
});

router.post('/categorys/new',(req,res)=>{
   const newCategory = {
      name: req.body.name,
      slug: req.body.slug
   };

   new Category(newCategory).save().then(()=>{
      console.log('Category successfully saved')
   }).catch(err=>{
      console.log('Request error :'+err);
   });

});

router.get('/categorys/add', (req,res)=>{
   res.render('admin/addCategorys');
});

module.exports = router;