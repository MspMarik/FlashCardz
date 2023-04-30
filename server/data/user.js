const { ObjectId } = require("bson");
const mongoCollections = require("../config/mongoCollections");
const user = mongoCollections.users;
const set = mongoCollections.stack;
const dataSet = require("./stack")
const bcrypt = require("bcryptjs");
const saltRounds = 4;
async function getUserSets(userId)
{
    if(!userId){
        throw "Error: Input was not given"
    }
    if(typeof userId!= "string")
    {
        throw "Error: Wrong type of input"
    }
    const userCollection = await user()
    const ifExist = await userCollection.findOne({_id:userId});
    if(ifExist== null)
    {
        throw "Error: User is not found"
    }
    const setCollection = await set()
    let sets
    let ids = ifExist.setsId
    let result = []
    for(i of ids)
    {
        result.push(await dataSet.getStack(i))
    }
    return result

}
async function create(name, username, password){
    if(!name||!username||!password)
    {
        throw "Error: Not all inputs were given"
    }
    if(typeof name !="string"&& typeof username !="string"&&typeof password !="string")
    {
        throw "Error: Was not given right types for user creation"
    }
    const userCollection = await user();
    name= name.trim();
    username = username.trim();
    password = password.trim();
    const ifExist = await userCollection.findOne({ username: username });
    
    if(ifExist!=null)
    {
        throw "Error: User already exist"
    }
    let newObjId = ObjectId();
    newObjId = newObjId.toString()
    const hash = await bcrypt.hash(password, saltRounds);
    let obj = {
        _id : newObjId,
        username: username,
        password: hash,
        setsId:[]
    }
    const insertInfo = await userCollection.insertOne(obj);
    if(insertInfo.insertedCount ===0)
    {
        throw "Error: Something went wrong inserting in the DB"
    }
    return obj
}
async function getUser(id)
{
    if(!id)
    {
        throw "Error: Input was not given"
    }
    if(typeof id !="string")
    {
        throw "Error: input was not the right type"
    }
    const userCollection = await user();
    const userFound = await userCollection.findOne({_id: id})
    return userFound
}
async function signIn(username,password)
{
    if(!username||!password)
    {
        throw "Error: Either Username or Password was not given."
    }
    if(typeof username!="string"||typeof password!= "string")
    {
        throw "Error: Was not given the right type of Username or Password"
    }
    const usersCollection = await user()
    const userFound = await usersCollection.findOne({ username: username });
    if(userFound==null)
    {
        throw "Error: Either Username or Password was not given"
    }
    hashedPassword = userFound.password
    try{

        compareToMatch = await bcrypt.compare(password,userFound["password"] );
    } catch (e) {
        throw "Error can not bcrypt.";
    }
    if(compareToMatch)
    {
        return userFound
    }
    else{
        throw "Error Username or password is not right"
    }


}
module.exports ={
    create,
    signIn,
    getUser,
    getUserSets

}