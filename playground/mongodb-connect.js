//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    const myDB = db.db('Todo');
    if(err){
        return console.log('Unable to connect to mongodb server.');
    }    
    console.log('Connected to mongodb server');
    
//    const myDB = db.db('Todo');
//    
//    myDB.collection('Todos').insertOne({
//        text: 'Something to do',
//        completed: false
//    }, (err, result) => {
//        if(err){
//            return console.log('Unable to insert todo', err);
//        }
//        
//        console.log(JSON.stringify(result.ops, undefined, 2));
//    });
    
    
//    myDB.collection('users').insertOne({
//       name: 'Aytegeb M.',
//        age: 34,
//        location: 'Addis Ababa'
//    }, (err, result) => {
//        if(err){
//            console.log('Unable to insert user');
//        }
//        
//        console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
//    });
    
    db.close();    
});

