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
   Category.find().then((categotys)=>{
      res.render("admin/categorys",{ categorys: categotys});
   }).catch(err=>{
      req.flash('error_msg',"Categorys list ERROR");
      res.redirect('/admin');
   });
});

router.post('/categorys/new',(req,res)=>{

   var error = [];

   if(!req.body.name || typeof req.body.name === undefined || req.body.name === null){
      error.push({text: "INVALID NAME"});
   }

   if(!req.body.slug || typeof req.body.slug === undefined || req.body.slug === null){
      error.push({ text: "INVALID SLUG"});
   }

   if(req.body.name.length < 2){
      error.push({ text: "Nome da category very little"})
   }

   if(error.length > 0){
      res.render("admin/addCategorys", {erros: error});
   } else {
      const newCategory = {
         name: req.body.name,
         slug: req.body.slug
      };
   
      new Category(newCategory).save().then(()=>{
         req.flash("success_msg", "Category successfully saved");
         res.redirect("/admin/categorys");
      }).catch(err=>{
         req.flash("error_msg", "ERROR: unsaved category");
         res.redirect("/admin");
      });
   }
});

router.get('/categorys/add', (req,res)=>{
   res.render('admin/addCategorys');
});

module.exports = router;