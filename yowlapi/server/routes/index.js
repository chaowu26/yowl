const express = require('express');
const { request } = require('http');
const db = require('../db');

const router = express.Router();

// POSTS CRUD 
router.get('/posts',async(req,res,next)=> {
    try {
        let result = await db.all();
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

router.get('/postbyid',async(req,res,next)=> {
  try {
      let result = await db.postbyid();
      res.json(result);
  }catch(err) {
      console.log(err);
      res.sendStatus(500);
  }
});

router.put('/editpost',async(req,res)=> {
  try {
      console.log(req.body["title"])
      let result = await db.updatepost(req.body["title"],req.body["content"],req.body["id"]);
      res.send(result);
      console.log(req.body);
     
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


// COMMENT CRUD
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

  router.put('/editpost',async(req,res)=> {
    try {
        console.log(req)
        let result = await db.updatepost(req.body["title"],req.body["content"],req.body["id"]);
        res.send(result);
       
    }catch(err) {
        console.log(err);
       
    }
  });
  
  router.delete('/posts',async(req,res)=> {
    try {
        let result = await db.deletepost(req.query.id);
        res.send("deleted!");
    }catch(err) {
        console.log(err);
       
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
      console.log(req.body["content"])
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
  
  // router.get('/comments/:id', function (req, res) {
  //   res.send('comment'+req.params.id);
  // });
  
  
  // router.put('/comments', function (req, res) {
  //   res.send('put!');
  // });
  
  // router.delete('/comments', function (req, res) {
  //   res.send('delete!');
  // });
  
// USER CRUD
router.get('/users',async(req,res,next)=> {
  try {
      let result = await db.users();
      res.json(result);
  }catch(err) {
      console.log(e);
      res.sendStatus(500);
  }
});

router.post('/users',async(req,res)=> {
  try {
      const success = (result)=> {
        console.log(result), res.status(201).json({data: "Inserted"})
    }
      let result = await db.postuser(success, (err) => res.status(500).send(err), req.body["username"],req.body["email"],req.body["birth"],req.body["password"],req.body["country"]);
  }catch(err) {
    console.log(req.body)
    console.log(err)
      res.status(500).send("Internal Server Error")
      console.log("REQUEST NOT ACHIEVED");
     
  }
});

router.post('/login', async(req, res) => {

  let result = await db.login(req.body["email"],req.body["password"]);
  console.log(result.length)
  if (result.length > 0 ) {
    // req.session.loggedin == true;
    // req.session.req.body["email"] == req.body["email"];
		// res.redirect('/');
    res.status(200).json({message: 'good'});
  } else {
    res.status(400).json({message: 'Incorect email and/or password'});
  }
  console.log(result)
  
})

router.put('/USER_UPDATEinfos', async(req, res)=> {
  try {
    console.log(req)
    let result = await db.updateUser(req.body["username"],req.body["email"],req.body["birth"],req.body["password"],req.body["country"],req.body["id"])
    res.send(result);
  } catch (err) {
    console.log(err)
  }
})


module.exports = router;