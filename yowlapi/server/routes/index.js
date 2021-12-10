const express = require('express');
const { request } = require('http');
const db = require('../db');


const router = express.Router();

// const multer = require('multer');

// var storage = multer.diskStorage({
//   destination: function (req, file, cd){
//     cb(null, 'public/assets/')
//   },
//   filename : function (req,file,cb){
//     console.log(file.originalname)
//     cb(null,file.originalname)
//   }
// })

// var upload = multer({storage:storage})

// router.post('/upload',upload.single('file'), function (req, res, next){
//     res.send('ok')
// });

router.get('/posts',async(req,res,next)=> {
    try {
        let result = await db.all();
        res.json(result);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/postbyid',async(req,res,next)=> {
    try {
        let result = await db.postbyid();
        res.json(result);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

router.get('/posts/:id',async(req,res,next)=> {
  try {
      
      let result = await db.postid(req.params.id);
      res.json(result);
  }catch(err) {
      console.log(err);
      res.sendStatus(500);
  }
});

router.post('/posts',async(req,res)=> {
  try {
      let result = await db.post(req.body["title"],req.body["content"]);
      res.send(result);
      console.log(req.body["title"])
  }catch(err) {
      console.log(err);
    
  }
});


// router.get('/posts/:id', function (req, res) {
//     res.send('post'+req.params.id);
//   });

// router.put('/posts', function (req, res) {
//     res.send('put!');
//   });

// router.delete('/posts', function (req, res) {
//     res.send('delete!');
//   });



router.get('/comments',async(req,res,next)=> {
  try {
    console.log(req.query)
  
      let result = await db.commentpost(req.query.id);
      console.log(req.query.id);
      res.json(result);
      
  }catch(err) {
    
      console.log(err);
      res.sendStatus(500);
  }
});

router.get('/souscomment',async(req,res,next)=> {
    try {
      console.log(req.query)
        let result = await db.getsouscomment(req.query.id);
        console.log(req.query.id);
        res.json(result);
        
    }catch(err) {
      
        console.log(err);
        res.sendStatus(500);
    }
  });
// router.get('/souscomments',async(req,res,next)=> {
//     try {
//       console.log(req.query)
    
//         let result = await db.souscomment(req.query.id);
//         console.log(req.query.id);
//         res.json(result);
        
//     }catch(err) {
      
//         console.log(err);
//         res.sendStatus(500);
//     }
//   });

router.get('/comments/:id',async(req,res,next)=> {
    try {
        let result = await db.souscomment(req.params.id);
        res.json(result);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
  });

router.post('/comments',async(req,res)=> {
  try {
      let result = await db.postcomment(req.body["name"],req.body["comment"],req.body["post_id"]);
      res.send(result);
  
  }catch(err) {
      console.log(err);
     
  }
});

router.post('/commentoncomment',async(req,res)=> {
    try {
        let result = await db.commentoncomment(req.body["name"],req.body["comment"],req.body["parent_id"]);
        res.send(result);
        console.log(req.body["comment"])
    }catch(err) {
        console.log(err);
       
    }
  });

  router.put('/editpost',async(req,res)=> {
    try {
        console.log(req.body["title"])
        let result = await db.updatepost(req.body["title"],req.body["content"],req.body["post_id"]);
        res.send(result);
        console.log(req.body);
       
    }catch(err) {
        console.log(err);
       
    }
  });


  router.delete('/posts/:id',async(req,res)=> {
    try {
        let result = await db.deletepost(req.query.id);
        res.send("deleted!");
    }catch(err) {
        console.log(err);
       
    }
  });

// router.get('/comments/:id', function (req, res) {
//   res.send('comment'+req.params.id);
// });


// router.put('/comments', function (req, res) {
//   res.send('put!');
// });

// router.delete('/comments', function (req, res) {
//   res.send('delete!');
// });

module.exports = router;