const { ObjectId } = require("bson");
const mongoCollections = require("../config/mongoCollections");
const user = mongoCollections.users;
const stacks = mongoCollections.stack;
async function createStack(userId,setData)
{ 
    if(!userId||!setData)
    {
        throw "Not all data points were given"
    }
    // for(let data of setData)
    // {
    //     if(typeof data !="string")
    //     {
    //         throw "Wrong data type to create stack"
    //     }
    // }
    let usersCollection = await user()
    const ifExist = await usersCollection.findOne({ _id: userId });
    if(ifExist==null)
    {
        throw "Error: user is not found"
    }
    let newObjId = ObjectId();
    newObjId = newObjId.toString()
    
    let stackCollection = await stacks()
    let obj = {
        _id: newObjId,
         data:setData,
         creatorId:userId,
    }
    const insertInfo = await stackCollection.insertOne(obj);
    if(insertInfo.insertedCount ===0)
    {
        throw "Error: Something went wrong inserting in the DB"
    }
    const modInfo = await usersCollection.updateOne({_id: userId}, {$push:{setsId:newObjId}})
    if(modInfo.modifiedCount ===0)
    {
        throw "Error: Did not Modify in the db"
    }
    return obj

}
async function getStack(stackId){
    if(!stackId)
    {
        throw "Error: Not all inputs were given"
    }
    let stackCollection = await stacks()
    let findone = await stackCollection.findOne({_id:stackId})
    if(findone==null)
    {
        throw "Error: Cannot find one."
    }
    return findone;


}
async function getAll()
{
    let stackCollection = await stacks()
    let result = await stackCollection.find({}).toArray()
    return result
}
module.exports= {
    createStack,
    getStack,
    getAll, 
}