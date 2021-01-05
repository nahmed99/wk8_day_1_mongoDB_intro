

use zoo;

const theId = ObjectId("5ff489fbb3fb75df3c080f8e");


// // FIND BY ID
db.animals.findOne({ _id: theId });

// UPDATE BY ID
// Takes two arguments:
// - query obj to find
// - object with key $set, value: object fields to update
db.animals.updateOne( { _id: theId }, { $set: {name: "Bannet" }});

// DELETE
db.animals.deleteOne({ _id: theId});