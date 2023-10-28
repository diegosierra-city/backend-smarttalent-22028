const {User} = require('../models/User')
const md5 = require("md5");

const getUsers = async (req,res) => {
 try {
  //throw new Error('test error')
 const listUsers = await User.findAll()
 //console.log(listUsers)
 //res.json(listUsers)
 return res.status(200).json(listUsers) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
    //res.send('get users')
//
}

const getUser = async(req,res) => {
 const {id} = req.params
 try {
 const user = await User.findByPk(id)
 if(!user) return res.senStatus(404)
 return res.status(200).json(user) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
    //res.send('get user')
}

const signUser = async(req,res) => {
 //console.log(req)
 const {email,password} = req.body
 try {
 const newUser = await User.findOne({
  where: {
    email,
    password: md5(password),
  },
})
if (!newUser){
 return res
   .status(400)
   .send("Error in login or password, please check your credentials");
}
return res.status(200).json(newUser) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('create users')
}

const createUser = async(req,res) => {
 //console.log(req)
 const {name,email,password} = req.body
 try {
 const newUser = await User.create({name,email,password: md5(password)})
 //console.log(newUser)
 //res.json(newUser)
 return res.status(200).json(newUser)  
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('create users')
}

const updateUser = async (req,res) => {
 const {id} = req.params
 const {name,email,password} = req.body
 try {
 const updateUser = await User.findByPk(id)
 updateUser.name = name
 updateUser.email = email
 updateUser.password = md5(password)
 //
 await updateUser.save()

 return res.status(200).json(updateUser) 
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('Update user')
}

const deleteUser = async(req,res) => {
 const {id} = req.params
 try {
 /* const newUser = await User.destroy({
  where:{
   id
  }
 }) */
 ///borrado logico
 const deleteUser = await User.findByPk(id)
 deleteUser.active = false
 await deleteUser.save()

 return res.sendStatus(204) ///only status
 } catch (error) {
  //console.log('error:',error)
  return res.status(402).json(error.message) 
 }
 //res.send('Delete users')
}

module.exports = {getUsers, getUser,signUser, createUser, updateUser, deleteUser}