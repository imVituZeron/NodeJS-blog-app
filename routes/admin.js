const express = require('express');
const router = express.Router();

router.get('/',(req, res)=> {
   res.render("admin/index");
});

router.get('/posts', (req, res)=>{
   res.send('Posts page');
});

router.get('/categorys',(req, res)=>{
   res.send('Category page');
});

module.exports = router;