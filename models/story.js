
const {ObjectId} = require("mongodb");


let stories;
exports.getCollection = db =>{
   // console.log(db.listCollections().toArray());
    stories = db.collection("stories");
   // console.log(stories.find().toArray().then(stories => console.log(stories)));
}

exports.find = () => stories.find().toArray();
 

exports.findById = id => stories.findOne({_id : ObjectId(id)});

exports.save = story => stories.insertOne(story);

exports.updateById = (id, newStory) => stories.updateOne({_id: ObjectId(id)},{$set: {title : newStory.title, content: newStory.content}});


exports.deleteById = (id) =>  stories.deleteOne({_id: ObjectId(id)});
