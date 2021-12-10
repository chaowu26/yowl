const mysql = require('mysql');
const { resolve } = require('path/posix');

var pool = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'chao2021',
    password        : '123456',
    database        : 'yowl'
});


// get all post 
let YOWLdb = {};
// YOWLdb.all = () => {
//     return new Promise ((resolve, reject) => {
//         pool.query('SELECT * FROM posts', (err, results)=> {
//             if(err) {
//                 return reject(err);
//             }
//             return resolve(results);
//         });
//     });
// };


// show post by ID

YOWLdb.postbyid = () => {
    return new Promise ((resolve, reject) => {
        pool.query('Select * from users INNER JOIN posts ON users.username = posts.name;', (err, results)=> {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// post a post 
YOWLdb.post = (title, content) => {
    return new Promise ((resolve, reject) => {
        pool.query('INSERT INTO posts (title,content) VALUES ("' + title + '","' + content + '" );', (err, results)=> {
            if(err) {
                return reject(err);
            }
        });
    });
};

// get post by id
YOWLdb.postid = (id) => {
    return new Promise ((resolve, reject) => {
        pool.query('SELECT * FROM posts WHERE id = ' + id, (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};


// get comment by id
YOWLdb.souscomment = (id) => {
    return new Promise ((resolve, reject) => {
        pool.query('SELECT * FROM comments WHERE id = ' + id, (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results[0]);
        });
    });
};

// get souscomment by comment
YOWLdb.getsouscomment = (req) => {
    return new Promise ((resolve, reject) => {
      
        pool.query('SELECT * FROM Comments where parent_id = '+ req, function (err, results) {
                if (err) {
                    return reject(err);
                }
                return resolve(results);
            });
    });
};

// get comment by post
YOWLdb.commentpost = (req) => {
    return new Promise ((resolve, reject) => {
      
        pool.query('SELECT * FROM Comments where post_id = '+ req, (err, results) => {
            if(err) {
                return reject(err);
            }
            return resolve(results);
        });
    });
};

// YOWLdb.souscomment = (req) => {
//     return new Promise ((resolve, reject) => {
      
//         pool.query('SELECT * FROM Comments where parent_id = '+ req, (err, results) => {
//             if(err) {
//                 return reject(err);
//             }
//             return resolve(results);
//         });
//     });
// };


// post comment by post
YOWLdb.postcomment = (name, comment,post_id) => {
    return new Promise ((resolve, reject) => {
        pool.query('INSERT INTO Comments (name,comment, post_id) VALUES ("' + name + '","' + comment + '","' + post_id + '");', (err, results)=> {
            if(err) {
                return reject(err);
            }
        });
    });
};

// post comment by comment
YOWLdb.commentoncomment = (name, comment,parent_id) => {
    return new Promise ((resolve, reject) => {
        pool.query('INSERT INTO Comments (name,comment, parent_id) VALUES ("' + name + '","' + comment + '","' + parent_id + '");', (err, results)=> {
            if(err) {
                return reject(err);
            }
        });
    });
};

// update post by id
// YOWLdb.updatepost = (title,content,req) => {
//     return new Promise ((resolve, reject) => {
//         //console.log('UPDATE posts SET title =' + title, 'content =' + content , 'WHERE id =' + req);
//         pool.query('UPDATE posts SET title =?, content =? WHERE id =?',[title, content, req], function (err,result) {
//             if(err) {
//                 return reject(err);
//             }
//         });
//         console.log('UPDATE posts SET title =' + title, 'content =' + content , 'WHERE id =' + req);
//     });
// };

YOWLdb.updatepost = (title,content,req) => {
    return new Promise ((resolve, reject) => {
        //console.log('UPDATE posts SET title =' + title, 'content =' + content , 'WHERE id =' + req);
        pool.query('UPDATE posts SET title=\"' + title +  '\", content=\"' + content + '\" WHERE id=' + req, function (err,result) {
            if(err) {
                return reject(err);
            }
        });
        console.log('UPDATE posts SET title =' + title, 'content =' + content , 'WHERE id =' + req);
    });
};

// delete post by id
YOWLdb.deletepost = (req) => {
    return new Promise ((resolve, reject) => {
        pool.query('DELETE FROM posts WHERE id = ' + req, (err, results) => {
            if(err) {
                return reject(err);
            }
        });
    });
};



module.exports = YOWLdb;