const {MongoClient, ObjectID} = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    const myDB = db.db('Todo');
    
    if(err){
        return console.log('Unable to connect to mongodb server.');
    }    
    console.log('Connected to mongodb server');
    
    // delete many
//    myDB.collection('Todos').deleteMany({text: 'Eat supper'}).then((result) => {
//        console.log(result);
//    }, (err)=>{
//        consloe.log('Unable to fetch todos', err);
//    });
    
    // deleteOne
//    myDB.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result) => {
//        console.log(result);
//    });
//    
    // findOneAndDelete
    myDB.collection('Todos').findOneAndDelete({completed: false}).then((result) => {
       console.log(result); 
    });

//    db.close();    
});

