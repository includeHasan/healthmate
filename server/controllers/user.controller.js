const { PrismaClient } = require('@prisma/client');
var prisma = new PrismaClient();

let welcome=async(req,res)=>{
try {
  let data = await prisma.User.findMany()
  console.log(data)
  res.send(data)
} catch (error) {
  console.log("yaha error hai"+error)
  res.status(500).send(error)
}
}
let createUser=async(req,res)=>{
  let data=req.body
  console.log(data)
try {
    let response=await prisma.User.create({data })
    res.send(response)
} catch (error) {
  console.log("yaha error hai"+error)
  res.status(500).send(error)
}
}

module.exports = {welcome,createUser}

// user_name: 'jayesh_guptrogi',
// email: 'jayeshChakka122@gmail.com',
// password: 'jayeshtatti',
// phone_no: 6969699692,
// user_type: 'bhikhari'