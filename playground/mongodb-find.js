//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    const myDB = db.db('Todo');
    
    if(err){
        return console.log('Unable to connect to mongodb server.');
    }    
    console.log('Connected to mongodb server');
    
//    myDB.collection('Todos').find({
//        _id: new ObjectID('5abcb9a7e4deff1770ee8c04')
//    }).toArray().then((docs) => {
//        console.log('Todos');
//        console.log(JSON.stringify(docs, undefined, 2));
//    }, (err)=>{
//        consloe.log('Unable to fetch todos', err);
//    });
    
//    myDB.collection('Todos').find().count().then((count) => {
//        console.log(`Todos count: ${count}`);
//    }, (err)=>{
//        consloe.log('Unable to fetch todos', err);
//    });
    
    
    myDB.collection('Users').find({name: 'Aytegeb M.'}).toArray().then((docs) => {
        console.log(JSON.stringify(docs, undefined, 2));
    }, (err)=>{
        consloe.log('Unable to fetch todos', err);
    });

//    db.close();    
});

